// src/@types/pov-design-system/index.d.ts
declare module 'pov-design-system';
declare module 'quill-image-resize-module-react';
declare module '@tosspayments/tosspayments-sdk' {
    interface TossPaymentsInstance {
      widgets: (options: { customerKey: string }) => PaymentWidgetsInstance;
    }
  
    interface PaymentWidgetsInstance {
      setAmount: (amount: { currency: string; value: number }) => Promise<void>;
      renderPaymentMethods: (options: { selector: string; variantKey: string }) => Promise<void>;
      renderAgreement: (options: { selector: string; variantKey: string }) => Promise<void>;
      requestPayment: (options: {
        orderId: string;
        orderName: string;
        successUrl: string;
        failUrl: string;
        customerEmail?: string;
        customerName?: string;
        customerMobilePhone?: string;
      }) => Promise<void>;
    }
  
    const loadTossPayments: (clientKey: string) => Promise<TossPaymentsInstance>;
    export { loadTossPayments, TossPaymentsInstance, PaymentWidgetsInstance, ANONYMOUS };
  }
