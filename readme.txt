=== Billy ===
Contributors: them.es
Donate link: https://them.es/plugins/billy
Tags: accounting, billing, invoices, quotes
Requires at least: 5.2
Tested up to: 5.8
Stable tag: 1.3.4
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
Requires PHP: 7.2

A business-oriented billing suite—tailored for freelancers and small agencies.

== Description ==

Preparing invoices and quotes can be time consuming. This plugin helps you speed-up your billing process, from creating invoices or quotes, minimizing any potential errors to getting paid faster.
Create an electronic invoice, a quote or accounting records in just a matter of minutes with the block-based WordPress editor. Invoice numbers are generated automatically in unique and sequential order. For convenience reasons the totals of the table rows are calculated in _What You See Is What You Get_ real-time.
Global settings like your name, your address, the invoice number format, tax rates and the currency can be defined in the Customizer. The billing header can be branded with your logo. Any frontend styles will be inherited from the theme so you please make sure the theme you've installed on your site fully supports the Block editor.

= Target group? =

* Freelancers and small agencies that need a billing suite which integrates seamlessly into their existing WordPress environment.

= Compatible themes? =

The plugin should work with any modern WordPress theme that supports the Block editor. Minor style modifications in the theme may be required.
__Heads up:__ Please note that the main content area of the __Single/Custom Post Template__ of your theme needs to be setup in "fullwidth" format. Having a sidebar may narrow the (invoice) table layout too much.

The following WordPress themes have been tested:
* [https://them.es/starter-bootstrap](https://them.es/starter-bootstrap "Bootstrap Starter theme")
* [https://them.es/starter-material](https://them.es/starter-material "Bootstrap Starter theme")
* [https://wordpress.org/themes/twentytwenty](https://wordpress.org/themes/twentytwenty "TwentyTwenty theme")
* [https://wordpress.org/themes/twentynineteen](https://wordpress.org/themes/twentynineteen "TwentyNineteen theme")

= What's included? =

* Invoices
* Quotes
* Accounting
* Custom styles: Compatible with any WordPress theme that supports the Block editor
* Custom Post types
* Blocks and Block templates
* WYSIWYG, Real-time calculation
* Locale specific number formatting
* Legally compliant: Unique and sequential invoice numbers
* PDF-Export
* Privacy by design: All information published will be made private by default and stays confidential as no data is being shared with third-parties
* Dashboard widget
* Multilingual: You can [help translate](https://translate.wordpress.org/projects/wp-plugins/billy "translate.wordpress.org") the plugin into your language

= Dependencies? =

* There are no third-party dependencies required. If you use the latest WordPress version with a block based WordPress theme you are good to go.

= Contribution? =

* The Plugin development can be followed via GitHub <3
* We are happy to receive feature suggestions and pull requests: [https://github.com/them-es/billy](https://github.com/them-es/billy "GitHub")

= PRO Add-on =
Please consider purchasing the premium add-on with the following features:
[https://them.es/plugins/billy](https://them.es/plugins/billy "Billy")

* Contact Management
* Address book block
* Enhanced invoices: Contact selector, Status selector, QR code generator for customized payment codes
* Enhanced quotes: Contact selector, Status selector
* Enhanced accounting: Autofilter, Autosync invoices
* Share Invoices and Quotes via a password protected link
* Address book
* Upcoming birthdays
* Admin columns
* Stats and charts
* WordPress Export Personal Data tool
* Compatible with Polylang

== Screenshots ==

1. Custom Post types
2. Global settings via Customizer
3. Dashboard widget
4. Editing an Invoice (Backend, TwentyTwenty theme)
5. Invoice (Frontend, TwentyTwenty theme)
6. Editing an Accounting table (Backend, TwentyTwenty theme)
7. Accounting table (Frontend, TwentyTwenty theme)

== Installation ==

1. Upload the Plugin to the `/wp-content/plugins/` directory.
2. Activate it through the 'Plugins' menu in WordPress.
3. (Optional) Activate the [PRO add-on](https://them.es/plugins/billy "them.es Billy Pro").
4. Open the Customizer: __Appearance > Customize > Billy [PRO]__
5. Add global data like your name, an address, currency, tax rates, etc.
6. If you need to start with a specific invoice number you can modify the __invoice number__ value.
7. Go back to the Dashboard and customize the global __Billy Header__ by adding your logo.
8. Congrats. You can create your first invoice or quote now.

== Frequently Asked Questions ==

= Where can I find the developer documentation? =
* __Demos and docs can be found here:__
  * [https://them.es/plugins/billy](https://them.es/plugins/billy "them.es")

= Are there any recommended third-party plugins? =
* Since you're using a self hosted version for your billing data, installing a [WordPress Backup Plugin](https://wordpress.org/plugins/search/backup "WordPress Backup Plugin") should be mandatory.
* Furthermore [Exporting your Customizer options](https://wordpress.org/plugins/search/customizer+export "WordPress Customizer Export Plugin") is highly recommended since Customizer values may get lost when switching your theme.

= Where can I get help? =
* You can ask questions or post feature requests in the Support forums
  * [https://wordpress.org/support/plugin/billy](https://wordpress.org/support/plugin/billy "WordPress Support")
  * [https://them.es/support](https://them.es/support "them.es Support")

= The billing templates don't look good in my theme =
* Please note that we can't support you in getting individual themes customized. But if your theme supports the Block editor everything should work out of the box. Minor CSS changes may be required.
* The plugin has been tested with the latest default WordPress themes and with some other major themes.

= How can I style the billing templates? =
* This plugin uses core Gutenberg block styles - so your theme needs to support Gutenberg blocks.
* All Billy templates are inheriting the styles of your theme. If required you can edit the __style.css__ file of your theme or add __custom CSS__ in the [Customizer](https://www.google.com/search?q=wordpress+customizer+add+custom+css "Customizer").

= How do I create a PDF version of my invoices/quotes? =
* A PDF-Exporter is included.
* If you need an exact copy of the screen version you can try the [Print to PDF feature](https://www.google.com/search?q=print+to+pdf "Print to PDF") built into your operating system.

= Why do I see a 404 error page when trying to open an invoice/quote? =
* __Billing information is sensitive data!__ Due to privacy reasons these posts cannot be made public which means that only authorized users have access. You need to be logged in to see private posts.
* If you would like to share a post with others you need to use the __Share Link option__ in the [PRO add-on](https://them.es/plugins/billy "them.es Billy").

= I need more features! =
* Please check out the __PRO add-on__ which is available for purchase here: [https://them.es/plugins/billy](https://them.es/plugins/billy "them.es Billy")
* WordPress developers are welcome to help improve the plugin via [GitHub](https://github.com/them-es "GitHub")
* You can also [help translate](https://translate.wordpress.org/projects/wp-plugins/billy "translate.wordpress.org") the plugin into your language

== Upgrade Notice ==

= 1.3.4 =
* Upgrade third-party dependencies

= 1.3.3 =
* Upgrade third-party dependencies

= 1.3.2 =
* WordPress 5.8+: Fix PHP notice in 'block_categories'
* Upgrade third-party dependencies

= 1.3.1 =
* Upgrade third-party dependencies

= 1.3.0 =
* Upgrade third-party dependencies
* Cleanup

= 1.2.0 =
* Upgrade third-party dependencies

= 1.1.4 =
* WordPress 5.5+: Fix PHP notice in 'register_rest_route'

= 1.1.3 =
* Compatibility with WordPress 5.5

= 1.1.0 =
* Embedded PDF files (PDF.js)

= 1.0 =
* Initial public release in the WordPress Plugin directory

== Changelog ==

= 1.3.4 =
* Numeric invoice numbers
* Autoincrement invoice number function has been rewritten using get_previous_post()

= 1.3.3 =
* Enqueue frontend assets only when necessary

= 1.3.2 =
* Compatibility with WordPress 5.8
* Coding Standards

= 1.3.1 =
* Compatibility with WordPress 5.7

= 1.3.0 =
* Refactoring
* Minor style updates to improve PDF output
* Removed PDF.js views: Use browser internal PDF viewer via iframe instead

= 1.2.3 =
* Refactored Meta
* Replaced two wrong Gettext domains

= 1.2.2 =
* Code quality
* Fixed misaligned label in Editor

= 1.2.1 =
* PDF footer: Use the date on which the post was published instead of the current date

= 1.2.0 =
* Allow more formatting options in descriptions: Replace RichText components with InnerBlocks components.
* Style improvements to the PDF output
* Tables: Vertical alignment "top"

= 1.1.4 =
* Minor compatibility update for WordPress 5.5+

= 1.1.3 =
* Compatibility with WordPress 5.5

= 1.1.3 =
* Minor updates: styles

= 1.1.1 =
* Prevent TypeError in main.js

= 1.1.0 =
* Embedded PDF files (PDF.js)
* Make PDF Export class variables public so they can be modified by third parties
* Minor style updates to the default PDF output

= 1.0.3 =
* Dynamically set the PDF filename
* Minor style updates to the PDF output

= 1.0.2 =
* Internationalization
* Readme updates

= 1.0.1 =
* Minor update to the table row frontend view

= 1.0 =
* Initial Release
* Created a GitHub repository with all development sources