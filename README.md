# GoogleAppScripts
Automate data normalization between supplier data and BigCommerce import template.  Includes image alt text generation and creation of new rows for Images associated with respective products.  

(Please Note: Products must be uploaded first to BigCommerce, then exported to a file with generated Product IDs associated to each product.  Filter for the products you want to add images for.  Load the fully qualified image URLs in column AY (51) associated to each product.  Easiest way is to sort the products in source and destination files so you can copy en-mass the column with image references.  If you have questions about how to do this, please feel free to reach out to me.  I will be writing another tool to automate this portion in the future.)

There are 51 Required fields (columns) in the import file sheet expected by this script to function correctly. 

Those fields are as follows: 
Item	ID	Name	Type	SKU	Options	Inventory Tracking	Current Stock	Low Stock	Price	Cost Price	Retail Price	Sale Price	Brand ID	Channels	Categories	Description	Custom Fields	Page Title	Product URL	Meta Description	Search Keywords	Meta Keywords	Bin Picking Number	UPC/EAN	Global Trade Number	Manufacturer Part Number	Free Shipping	Fixed Shipping Cost	Weight	Width	Height	Depth	Is Visible	Is Featured	Warranty	Tax Class	Product Condition	Show Product Condition	Sort Order	Variant Image URL	Internal Image URL (Export)	Image URL (Import)	Image Description	Image is Thumbnail	Image Sort Order	YouTube ID	Video Title	Video Description	Video Sort Order	

