# Project overview

This project was created for the Coderhouse React Course (34730). It features an ECommerce where you can:

· Register, Login, Sign out and profile detail edition

· Add different items to your cart and remove items from your cart

· Add multiple items of the same kind

· Successfully complete the order

· List all items or by category

· See the complete information of the items in each specific page


## How to navigate

### Register and Login

First, you will have to register a user in order to be able to add items to your cart. You will enter to the nav bar button `Registrarse`, and enter the following data:


· Username: An alphanumerical name can be picked. You have to choose a name thats elegible (not being used).

· Password: Alphanumerical sequence

· Home address: Be sure to parse it correctly!

· Email address: It has a validation for the email format, so make sure you are typing it correctly.

· DNI/Passport: A 8 digit number

· Telephone: A 10 digit number 


When submitting you will see a sweetalert showing the status of the registration (Success or Error)

After you register, you have to login, clicking the nav bar button `Loguearse`, which will ask for Username and Password.

### Cart

Only when logged in, you will be able to add items to your cart. You can add Different items in different quantities. You are able to add some of them from the landing and from each item detail page. All items are shown in the nav bar button `Mercado`.

### Filtering items by category

You can as well filter some Items by category. This filtration is on the sidebar at the `Mercado` tab. Currently, the only filtering available is the `Tipo`.

### Item information detail

Here you have all the item information, showing image, name, description, price and categories. Also. you have the option to add it to the cart.

### Finishing order

When navigating to the cart widget on the nav bar (only visible when the cart has items), you will be able to edit the quantity of each item and to process the order. To complete the order, you will click on the button `Realizar compra`, which will popup a modal where you can see your user information and you have to complete the payment method information with the following:

· Credit card number: A 10 digit number
· Card expiricy date (Currently has no validation)
· Card Pin code: A 4 digit number
· Card Owner name

When clicked `Realizar compra` on the modal, a SweetAlert will popup showing the order status.

### Listing user orders

You will have a list of orders in the nav bar button `Ordenes` with each order information listing:

· Order ID: A string ID that is made from the username and the exact date
· Items purchased with each quantity
· Price: The ammount that was payed

### Editing user information

You can edit all your information, except your username, from the nav bar button `Usuario`. The same validation as in registering will be done in each field.

## Implamentations

Some packages were installed through the command `npm install`. Some of them are:

· React-Bootstrap
· React-Router-Dom
· SweetAlert
· Firebase
· GH-pages (For an easier deployment to GitHub Pages via the command `npm deploy`)


