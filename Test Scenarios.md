**Story** : As a customer, I want to buy a laptop with credit card payment and get it delivered to my address

#### Testing scenarios for product listing pages and search results pages ####

* Check that the user can access the Harvey Norman mega menu. 
* Verify that the user can navigate to the laptop products listing page.
* Check whether the user can search for a product by entering product name ,brand name etc.
* Check whether the user can access search results listing page
* Verify that the product listing page filters work as expected.
* Verify that the product listing page sort by options works as expected.
* On the product listing page, make sure the Add to Cart button works.
* Make sure the user can navigate to the Product details page by clicking the product name or image on the product listing page.

#### Test scenarios for product detail pages ####
* Check that the user can view product images on the product details page.
* Check the product price on the product details page.
* Check product description
* Verify that the user can expand the care term dropdown on the product details page.
* Check if the user can select the care term on the product details page.
* On the product details page, check the price that is updated with the selected care term.
* On the product details page, check the functionality of the 'feature' button.
* On the product details page, check the ‘’watch video’’ button's functionality.
* On the product details page, check the ''products benefits'' button functionality.
* Check the ‘’overview’’ button on the product details page.
* Check the 360 view of the laptop product
* Select delivery methods on the product details page.
* Check the estimate delivery date functionality.
* Check the delivery cost by entering postcode
* Make sure the add to cart button on the product detail page works as expected.

#### Test scenarios for the shopping cart ####
* Check the mini cart  functionality.
* Make sure the mini cart shows the correct product details and amount.
* Check the functionality of the "View cart" button on the mini cart.
* Ensure that the product details (product name, SKU) are displayed correctly in the shopping cart.
* Check that the selected care term appears as expected on the shopping cart page.

#### Verify that the QTY is displayed correctly on the shopping cart ####
* Make sure the user can select delivery options.
* Check  the Standard delivery option in the shopping cart
* Check the same-day delivery option in your shopping cart
* Check the Scheduled delivery option in your shopping cart
* Make sure the product subtotal in the shopping cart is correct.
* Check the shipping amount in the shopping cart
* Make sure the tax amount is correct
* Verify the total amount in the shopping cart
* Check if the user navigates to the one step checkout page after clicking "Continue to checkout" on the shopping cart

#### Test scenarios for one step checkout ####
* On the checkout page, check whether the user can choose guest checkout
* On the checkout page, check whether the user can choose logged user checkout
* Check forgot password functionality on checkout page
* Ensure that the back to cart button is available so that the user can modify the cart as necessary.
* Verify that the selected delivery option is showing as expected.
* Check product details are correct on the checkout page.
* Check that the subtotal is correct on the checkout page.
* Make sure the shipping amount is correct on the checkout page.
* Make sure the discount amount is correctly displayed on the checkout page if any 
* Make sure the tax amount is correct
* Make sure the total amount is correct on the checkout page
* Check the address enter functionality on the checkout page
* Check the auto-fill functionality on the checkout page
* Test the scenario in which the invoice address and the delivery address are different
* Validate all mandatory fields. During the payment process, it shouldn't proceed if any of the mandatory fields are left blank.
* Verify that the error messages are displayed when the user enters invalid information in the mandatory fields.
* Check payment option drop down on checkout page
* Verify that the user can select a credit card payment method
* Test  the checkbox "I agree to the Terms and Conditions and Privacy Policy" on the checkout page
* Test with Valid Card Number , Valid Expiry Date , Invalid CVV Number
* Test with Valid Card Number , Invalid Expiry Date , Valid CVV Number
* Test with Invalid Card Number , Valid Expiry Date , Valid CVV Number
* Test with valid card number , Valid expiry date,valid CVV Number
* Verify that the credit card information is encrypted on checkout page
* Test with blocked card details
* Ensure that the user receives information about unsuccessful payments
* In any case, make sure there isn't a double payment
* Check what happens once the session expires
* Check with valid Mastercard details
* Check with valid visa card details
* Check with valid American express card details
* On successful order processing, the user should be redirected to the order confirmation page.
* Place an order as a guest user too.

#### Test scenarios for order confirmation ####
* After a successful transaction, check whether the user is redirected to the order confirmation page(Thank you page).
* Verify the delivery address/invoice address on the order confirmation page.
* Check order number on order confirmation page
* Verify that the delivery option is correct
* Verify the product details on the order confirmation page
* On the order confirmation page, verify that the product subtotal, shipping amount, discount amount(if any), tax amount, and total amount are correct.
* Check the status of the transaction from the payment gateway side.
* On the payment gateway side, Verify that the amount deducted is the same as the amount indicated. 
* Upon successful payment, ensure the user receives an email notification.
* Check the order details are correct on order confirmation email
* Verify the delivery address/invoice address on the order confirmation email
* Make sure the order information is correct on my account page (if user logged in when placing an order)
* Check refused payment from payment gateway side
* Check tracking details if any 
* When an shipment created, check the dispatch notification

#### Test scenarios for the Magento backend ####
* Check order details from Magento backend (Sales>orders)
* Make sure the customer's name and email address are correct in Magento side
* Make sure the delivery address and invoice address are correct in the Magento backend
* Make sure the product details and quantity are correct in Magento
* Check that the subtotal, discount amount (if any), tax amount, and total amount are correct in the Magento backend.
* Check the order status from the Magento backend
* Check whether the credit card details are encrypted on Magento side
* Check the invoice details are correct
* Check whether the shipment created for the order
* Check the shipment details
