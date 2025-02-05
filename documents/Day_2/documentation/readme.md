
# MARKETPLACE TECHNICAL FOUNDATION

# MARKETPLACE: General E-Commerce

# BRAND: Furnico

## Day 1: Business Focus Vision

### Establishing a Strong Business Foundation

Furnico aims to revolutionize furniture shopping with:

- **Personalized shopping**
- **Community-driven features**
- **Sustainable products**

### Key Features

- **AI-driven interior design assistance**
- **AR visualization for real-time furniture fitting**
- **Eco-friendly furniture options**
- **Subscription model for exclusive access**
- **Gamified shopping experience**

### Target Audience

- **Young professionals**
- **Families**
- **Small businesses**
- Addressing the pain point of visualizing and purchasing furniture online.

---

## Day 2: Transitioning to Technical Planning

### Frontend Development Requirements

- **Technology Stack**:
  - **Next.js**: Fast, SEO-optimized pages.
  - **React**: Reusable components and UI rendering.
  - **TailwindCSS**: Responsive, visually appealing design.
  - **AR Integration**: React-Three/Fiber for 3D interactive models.

### Backend Development Requirements

- **Sanity CMS**: Content management and dynamic updates.
- **Schema Development**:
  - Custom schemas for products, customers, orders, and shipments.
- **Database Design**:
  - Scalable structure to store product and customer data.
- **Third-Party Integrations**:
  - Payment APIs: Stripe, PayPal
  - Shipment Tracking: ShipEngine, AfterShip
  - AI Recommendations: TensorFlow, Algolia

---

## System Architecture Overview

![Firnico System Architecture](/Day_2/documentation/images/46.png "System Architecture")

### Components

- **Frontend (Next.js)**: Interacts with Sanity CMS to fetch and display product data.
- **Sanity CMS**: Handles dynamic content, managing product data, customer orders, and real-time updates.
- **Third-Party APIs**:
  - Stripe for payment
  - ShipEngine for delivery tracking

```plaintext

+-------------------+    +------------------+    +----------------------+  
| Frontend (Next.js)|<-->|     Sanity CMS   |<-->|  Third-Party APIs    |  
| (UI/UX & Pages)   |    | (Product Data,   |    | (Payment Gateway,    |  
|                   |    | Customer Details,|    | Shipment Tracking)   |  
|                   |    | Orders Mgmt.)    |    |                      |  
+-------------------+    +------------------+    +----------------------+  
        |                       |                       |                   
        V                       V                       V                   
+------------------+   +----------------------+    +-------------------+   
| AR Visualization |   | Payment Gateway API |    | Shipment Tracking |   
| (Interactive 3D) |   |    (Stripe, PayPal)  |    |   (ShipEngine)    |   
+------------------+   +----------------------+    +-------------------+   
        |                                                                    
        V                                                                    
+------------------------+                                                   
| AI Product Recommender |                                                   
|   (Algolia/TensorFlow) |                                                   
+------------------------+
```

---
 ![FURNICO System Architecture](/Day_2/documentation/images/51.png "System Architecture")

## API Requirements & Endpoints

### Product API

- **GET /products**: Fetch all products.
- **GET /products/{id}**: Fetch product details.
- **POST /products**: Add a new product.
- **PUT /products/{id}**: Update product details.
- **DELETE /products/{id}**: Delete a product.

### Customer API

- **POST /customers**: Register a new customer.
- **GET /customers/{id}**: Get customer details.
- **PATCH /customers/{id}**: Update customer information.

### Order API

- **POST /orders**: Place a new order.
- **GET /orders/{id}**: Retrieve order details.
- **PUT /orders/{id}**: Update order status.
- **DELETE /orders/{id}**: Cancel an order.

### Shipment API

- **GET /shipment/{orderId}**: Retrieve shipment tracking information.
- **POST /shipment**: Create a new shipment.

### Payment API

- **POST /payment**: Initiate payment via Stripe/PayPal.

### AI/Recommendation API

- **GET /recommendations**: Fetch personalized product recommendations.

---

## Authentication & Authorization

### Authentication

- **Clerk** for OAuth 2.0 (Google, Facebook) or JWT sessions.

### Authorization

- **Role-Based Access Control (RBAC)**:
  - **Admin Role**: Full access.
  - **Customer Role**: Browse products, place orders, view history.
  - **Guest Role**: Limited access to browse products.

### Validation

- Use **Joi** or **Yup** for schema validation.

---

## Brief Schema Definitions

![FurniCO System Architecture](/Day_2/documentation/images/42.png "System Architecture")

### Product Schema

```json
{
  "name": "String",
  "description": "String",
  "price": "Number",
  "stock": "Number",
  "image_url": "URL",
  "category": "String",
  "isFeatured": "Boolean"
}
```

### Order Schema

```json
{
  "customer_id": "String",
  "products": "Array",
  "total_price": "Number",
  "shipping_address": "String",
  "order_status": { "type": "String", "enum": ["Pending", "Shipped", "Delivered"] },
  "created_at": "Date"
}
```

### Customer Schema

```json
{
  "name": "String",
  "email": "String",
  "password": "String",
  "shipping_address": "String",
  "order_history": "Array"
}
```

### AI Recommendations Schema

```json
{
  "customer_id": "String",
  "recommended_products": "Array"
}
```

---

## Security Best Practices

- **Rate Limiting & CAPTCHA**: Prevent brute force attacks.
- **Data Encryption**: Encrypt sensitive customer data.
- **Two-Factor Authentication (2FA)**: Add extra security for users and admins.

---

## Testing and Documentation

- **API Testing**: Use Postman to test endpoints.
- **Frontend Testing**: Ensure proper rendering, especially for AR features.
- **Integration Testing**: Test frontend-backend interaction.
- **Real-Time Data Testing**: Verify Sanity CMS updates reflect on the frontend.

---

## Closing Statement

By defining clear API requirements, schemas, and system architecture, we are building a scalable, efficient platform for FurniCo. This platform aims to blend cutting-edge technologies with real-world needs, creating a seamless, personalized furniture shopping experience. Each feature, from AR fitting to AI recommendations, reflects our commitment to innovation and customer satisfaction.

## Build by:  "Arish Arsala"
