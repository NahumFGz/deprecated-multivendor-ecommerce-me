# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

src/
|-- components/
|   |-- Header/
|   |   |-- Header.js
|   |   |-- Header.css
|   |-- Footer/
|   |   |-- Footer.js
|   |   |-- Footer.css
|   |-- ProductCard/
|   |   |-- ProductCard.js
|   |   |-- ProductCard.css
|   |-- VendorCard/
|   |   |-- VendorCard.js
|   |   |-- VendorCard.css
|   |-- ...
|
|-- features/
|   |-- Auth/
|   |   |-- pages/
|   |   |   |-- LoginPage.js
|   |   |   |-- RegisterPage.js
|   |   |-- components/
|   |   |   |-- LoginForm.js
|   |   |   |-- RegisterForm.js
|   |   |-- stores/
|   |   |   |-- authStore.js
|   |-- Product/
|   |   |-- pages/
|   |   |   |-- ProductListPage.js
|   |   |   |-- ProductDetailPage.js
|   |   |-- components/
|   |   |   |-- ProductList.js
|   |   |   |-- ProductDetail.js
|   |   |-- stores/
|   |   |   |-- productStore.js
|   |-- Cart/
|   |   |-- pages/
|   |   |   |-- CartPage.js
|   |   |-- components/
|   |   |   |-- CartItem.js
|   |   |   |-- CartSummary.js
|   |   |-- stores/
|   |   |   |-- cartStore.js
|   |-- Checkout/
|   |   |-- pages/
|   |   |   |-- CheckoutPage.js
|   |   |-- components/
|   |   |   |-- CheckoutForm.js
|   |   |-- stores/
|   |   |   |-- checkoutStore.js
|   |-- Order/
|   |   |-- pages/
|   |   |   |-- OrderConfirmationPage.js
|   |   |-- components/
|   |   |   |-- OrderSummary.js
|   |   |-- stores/
|   |   |   |-- orderStore.js
|   |-- Vendor/
|   |   |-- pages/
|   |   |   |-- VendorListPage.js
|   |   |   |-- VendorDetailPage.js
|   |   |   |-- VendorDashboardPage.js
|   |   |-- components/
|   |   |   |-- VendorList.js
|   |   |   |-- VendorDetail.js
|   |   |   |-- VendorDashboard.js
|   |   |-- stores/
|   |   |   |-- vendorStore.js
|
|-- hooks/
|   |-- useAuth.js
|   |-- useFetchProducts.js
|   |-- useCart.js
|   |-- useCheckout.js
|   |-- useOrder.js
|   |-- useVendor.js
|
|-- layouts/
|   |-- MainLayout.js
|   |-- AuthLayout.js
|   |-- VendorLayout.js
|
|-- services/
|   |-- api/
|   |   |-- authService.js
|   |   |-- productService.js
|   |   |-- cartService.js
|   |   |-- orderService.js
|   |   |-- vendorService.js
|
|-- App.js
|-- index.js
