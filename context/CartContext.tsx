"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";

export type OrderType = "Pickup" | "Delivery" | null;

export type CartItem = {
  id: string; // unique per item + variant combo
  name: string;
  variant?: string;
  unitPrice: number;
  quantity: number;
  lineTotal: number; // computed: unitPrice * quantity
  notes?: string; // item-level note e.g. "no onions"
  categoryTitle?: string;
  priceStr?: string;
};

export type AddToCartInput = {
  id: string;
  name: string;
  variant?: string;
  price: string | number;
  notes?: string;
  quantity?: number;
  categoryTitle?: string;
};

interface CartContextValue {
  items: CartItem[];
  cart: CartItem[]; // alias for items
  subtotal: number;
  formattedSubtotal: string;
  itemCount: number;
  totalItemCount: number; // alias for itemCount
  orderType: OrderType;
  setOrderType: (type: OrderType) => void;
  customerName: string;
  setCustomerName: (name: string) => void;
  customerNotes: string;
  setCustomerNotes: (notes: string) => void;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addToCart: (item: AddToCartInput) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  setQuantity: (id: string, qty: number) => void;
  setItemNotes: (id: string, notes: string) => void;
  clearCart: () => void;
  sendWhatsAppOrder: () => void;
  toastMessage: string | null;
  dismissToast: () => void;
  hasSqItems: boolean;
  getItemQuantity: (baseId: string, variant?: string) => number;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

const LOCAL_STORAGE_KEY = "themallcafe_cart_v2";

export function parsePriceToNumber(price: string | number): number {
  if (typeof price === "number") return price;
  if (!price) return 0;
  const match = price.match(/R\s*([0-9]+(?:\.[0-9]{1,2})?)/i);
  if (match && match[1]) {
    const num = parseFloat(match[1]);
    return isNaN(num) ? 0 : num;
  }
  return 0;
}

export function formatPrice(amount: number): string {
  return `R${amount.toFixed(2)}`;
}

export function generateCartItemId(baseId: string, variant?: string): string {
  if (!variant || !variant.trim()) {
    return baseId;
  }
  const cleanVariant = variant.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return `${baseId}-${cleanVariant}`;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [orderType, setOrderType] = useState<OrderType>(null);
  const [customerName, setCustomerName] = useState<string>("");
  const [customerNotes, setCustomerNotes] = useState<string>("");
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Load cart from localStorage on client mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          const validated = parsed.map((item: Record<string, unknown>) => {
            const unitPrice =
              typeof item.unitPrice === "number"
                ? item.unitPrice
                : parsePriceToNumber(
                    typeof item.priceStr === "string" ? item.priceStr : 0
                  );
            const quantity =
              typeof item.quantity === "number" && item.quantity > 0
                ? item.quantity
                : 1;
            return {
              id: String(item.id),
              name: String(item.name),
              variant:
                typeof item.variant === "string" ? item.variant : undefined,
              unitPrice,
              quantity,
              lineTotal: unitPrice * quantity,
              notes: typeof item.notes === "string" ? item.notes : undefined,
              categoryTitle:
                typeof item.categoryTitle === "string"
                  ? item.categoryTitle
                  : undefined,
              priceStr:
                typeof item.priceStr === "string"
                  ? item.priceStr
                  : formatPrice(unitPrice),
            };
          });
          queueMicrotask(() => {
            setItems(validated);
          });
        }
      }
    } catch (e) {
      console.warn("Failed to load cart from localStorage", e);
    } finally {
      queueMicrotask(() => {
        setIsInitialized(true);
      });
    }
  }, []);

  // Save cart to localStorage on changes
  useEffect(() => {
    if (!isInitialized) return;
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.warn("Failed to save cart to localStorage", e);
    }
  }, [items, isInitialized]);

  // Toast auto-dismiss after 2.5 seconds
  useEffect(() => {
    if (!toastMessage) return;
    const timer = setTimeout(() => {
      setToastMessage(null);
    }, 2500);
    return () => clearTimeout(timer);
  }, [toastMessage]);

  const dismissToast = useCallback(() => {
    setToastMessage(null);
  }, []);

  const openCart = useCallback(() => setIsCartOpen(true), []);
  const closeCart = useCallback(() => setIsCartOpen(false), []);
  const toggleCart = useCallback(() => setIsCartOpen((prev) => !prev), []);

  const addToCart = useCallback((input: AddToCartInput) => {
    const lineId = generateCartItemId(input.id, input.variant);
    const unitPrice = parsePriceToNumber(input.price);
    const addQty = input.quantity && input.quantity > 0 ? input.quantity : 1;

    setItems((prev) => {
      const existingIndex = prev.findIndex((i) => i.id === lineId);
      if (existingIndex >= 0) {
        const next = [...prev];
        const updatedQty = next[existingIndex].quantity + addQty;
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: updatedQty,
          lineTotal: next[existingIndex].unitPrice * updatedQty,
          // Preserve existing notes or append if new note provided
          notes: input.notes?.trim() ? input.notes.trim() : next[existingIndex].notes,
        };
        return next;
      }

      const newItem: CartItem = {
        id: lineId,
        name: input.name,
        variant: input.variant?.trim() || undefined,
        unitPrice,
        quantity: addQty,
        lineTotal: unitPrice * addQty,
        notes: input.notes?.trim() || undefined,
        categoryTitle: input.categoryTitle,
        priceStr: typeof input.price === "string" ? input.price : formatPrice(unitPrice),
      };

      return [...prev, newItem];
    });

    const label = input.variant ? `${input.name} (${input.variant})` : input.name;
    setToastMessage(`Added 1× ${label} to order`);
  }, []);

  const removeFromCart = useCallback((id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const updateQuantity = useCallback((id: string, delta: number) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQty = item.quantity + delta;
          // Step never drops below 1 via stepper; remove button must be used to drop to 0
          const clampedQty = newQty < 1 ? 1 : newQty;
          return {
            ...item,
            quantity: clampedQty,
            lineTotal: item.unitPrice * clampedQty,
          };
        }
        return item;
      })
    );
  }, []);

  const setQuantity = useCallback((id: string, qty: number) => {
    if (qty < 1) return;
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: qty,
            lineTotal: item.unitPrice * qty,
          };
        }
        return item;
      })
    );
  }, []);

  const setItemNotes = useCallback((id: string, notes: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, notes: notes.trim() || undefined } : item
      )
    );
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
    try {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    } catch {
      // ignore
    }
  }, []);

  const getItemQuantity = useCallback(
    (baseId: string, variant?: string) => {
      const lineId = generateCartItemId(baseId, variant);
      const found = items.find((i) => i.id === lineId);
      return found ? found.quantity : 0;
    },
    [items]
  );

  const itemCount = useMemo(() => {
    return items.reduce((acc, item) => acc + item.quantity, 0);
  }, [items]);

  const subtotal = useMemo(() => {
    return items.reduce((acc, item) => acc + item.lineTotal, 0);
  }, [items]);

  const formattedSubtotal = useMemo(() => {
    return formatPrice(subtotal);
  }, [subtotal]);

  const hasSqItems = useMemo(() => {
    return items.some((item) => item.unitPrice === 0);
  }, [items]);

  const sendWhatsAppOrder = useCallback(() => {
    if (items.length === 0 || !orderType) return;

    // Line items format: {quantity}x {name} ({variant if present}) – R{lineTotal}
    const orderLines = items.map((item) => {
      const variantPart = item.variant ? ` (${item.variant})` : "";
      const itemNotePart = item.notes ? ` [${item.notes}]` : "";
      return `${item.quantity}x ${item.name}${variantPart} – ${formatPrice(item.lineTotal)}${itemNotePart}`;
    });

    const lines: string[] = [
      "🛒 New Order – The Mall Cafe",
      "",
      ...orderLines,
      "",
      `Total: ${formattedSubtotal}`,
      "",
      `Order type: ${orderType}`,
    ];

    if (customerName.trim()) {
      lines.push(`Name: ${customerName.trim()}`);
    }

    if (customerNotes.trim()) {
      lines.push(`Notes: ${customerNotes.trim()}`);
    }

    const messageText = lines.join("\n");
    const phone = "27815776930";
    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;

    if (typeof window !== "undefined") {
      window.open(whatsappUrl, "_blank");
    }

    // Automatically clear cart after order handoff
    clearCart();
    setIsCartOpen(false);
  }, [
    items,
    orderType,
    customerName,
    customerNotes,
    formattedSubtotal,
    clearCart,
  ]);

  const value = useMemo(
    () => ({
      items,
      cart: items,
      subtotal,
      formattedSubtotal,
      itemCount,
      totalItemCount: itemCount,
      orderType,
      setOrderType,
      customerName,
      setCustomerName,
      customerNotes,
      setCustomerNotes,
      isCartOpen,
      openCart,
      closeCart,
      toggleCart,
      addToCart,
      removeFromCart,
      updateQuantity,
      setQuantity,
      setItemNotes,
      clearCart,
      sendWhatsAppOrder,
      toastMessage,
      dismissToast,
      hasSqItems,
      getItemQuantity,
    }),
    [
      items,
      subtotal,
      formattedSubtotal,
      itemCount,
      orderType,
      customerName,
      customerNotes,
      isCartOpen,
      openCart,
      closeCart,
      toggleCart,
      addToCart,
      removeFromCart,
      updateQuantity,
      setQuantity,
      setItemNotes,
      clearCart,
      sendWhatsAppOrder,
      toastMessage,
      dismissToast,
      hasSqItems,
      getItemQuantity,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
