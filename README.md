# GST-Billing-App

In this app new product can be added, existing products can be edited in product entry page. Then in billing page all existing products are displayed in a table with search option to search according to any field. After selecting the quantity can be changed and total cost of that product and gross total cost will be updated dynamically.<br>

The Product Entry page appears as below <br>
![](./readme_pics/pic1.png)
<br>

There is a form to fill Product details on the left and a table showing existing products in the database.
<br>As a new product is filled the table gets updated with new product entry<br>
Initially the Update button is disabled <br>
![](./readme_pics/pic2.png)
<br>
Any Product details can be updated except the product code by clicking on Edit button in the table. Once the button is clicked the details of that product is set in the form with Product Code field disabled and Save button disabled.<br>
Like here I made changes in Product4 with product code 7821u and change its fields from Product4 => Product8 , 1239 => 1230 , 5 => 24 <br>
![](./readme_pics/pic3.png)
<br>
Then on clicking Update button the fields get updated and changes are displayed in table <br>
![](./readme_pics/pic4.png)
<br>
Product can even be deleted from database by clicking delete button in the table. Here I deleted Product5<br>
![](./readme_pics/pic5.png)
<br>
<br>
Clicking on Billing button takes us to the billing page where all the entered products in previous page are displayed in a table on the right under Search Results tag.
![](./readme_pics/pic6.png)
<br>
User can search any product using any of their field and searched results are displayed under the Search Results table. Now user can click on Select button to add the product to final list. On clicking Select, the product gets added to the Selected Products table with default quantity 1 and the total GST price of product is displayed in the row and gross total GST price is displayed at the footer. Making any changes to quantity dynamically changes the Total Price and Total Gross Price  <br>
![](./readme_pics/pic7.png)
<br>
Similarly by searching for any keyword shortlisted words are displayed on the Search results table and select button can be used to select the product for Billing<br>
![](./readme_pics/pic8.png)
<br>
So we add some more products...<br>
![](./readme_pics/pic9.png)
<br>
And finally making any changes to the quantity of any product dynamically changes the Total Price and Total Gross Price as depicted below<br>
![](./readme_pics/pic10.png)


