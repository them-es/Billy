## Billy

**Billy by them.es** is a business-oriented billing suite—tailored for freelancers and small agencies that integrates seamlessly into an existing WordPress environment.

The **FREE version** is available on the WordPress Plugins Directory under [https://wordpress.org/plugins/billy](https://wordpress.org/plugins/billy)
For more information and a showcase and for purchasing the **PRO Add-on** check out [https://them.es/plugins/billy](https://them.es/plugins/billy)

## What's included?

-   Custom Post types with Blocks and Block templates.
-   Privacy by design: All information published will be made private by default and stays confidential as no data is being shared with third-parties.

## Compatible themes

The Plugin should work with any modern WordPress theme that supports the Block editor. Minor style modifications may be required.
**Heads up:** Please note that the main content area of the **Single/Custom Post Template** needs to be "fullwidth". Having a sidebar may narrow the (invoice) table layout too much.

### The Plugin has been tested with the following themes

-   [https://them.es/starter-fse](https://them.es/starter-fse)
-   [https://them.es/starter](https://them.es/starter)
-   [https://them.es/starter-material](https://them.es/starter-material)
-   [https://wordpress.org/themes/twentytwentythree](https://wordpress.org/themes/twentytwentythree)
-   [https://wordpress.org/themes/twentytwentytwo](https://wordpress.org/themes/twentytwentytwo)
-   [https://wordpress.org/themes/twentytwentyone](https://wordpress.org/themes/twentytwentyone)
-   [https://wordpress.org/themes/twentytwenty](https://wordpress.org/themes/twentytwenty)
-   [https://wordpress.org/themes/twentynineteen](https://wordpress.org/themes/twentynineteen)

## Contributing

If you would like to extend this plugin you can fork this repo and create a pull request.
Bugs or feature requests can be reported by creating a new issue.

### JS/CSS assets

-   `$ npm install`.
-   `$ npm run watch`: Start developing in the **/assets** directory.

### PHP

All PHP classes are stored in a separate directory **/inc**

Some external dependencies need to be installed via Composer

-   `$ composer install`

### Blocks

Blocks are stored in a separate directory **/blocks**

-   `$ npm install`
-   `$ npm run start`
    -   Start developing and test the updated version.
-   `$ npm run build`
    -   Create a build version and test the updated build version.

### Translations

All translations are managed via [https://translate.wordpress.org/projects/wp-plugins/billy](translate.wordpress.org). If you have modified translation strings you can update the **POT** file with the following command (WP-CLI required!).

-   `$ npm run create-languagefile`

More information: [https://developer.wordpress.org/block-editor/developers/internationalization](https://developer.wordpress.org/block-editor/developers/internationalization)

### Dist version

The development version may become quite large due to some external libraries and should not be implemented on a live system. You can create a smaller `dist` version with the following command:

-   `$ npm run dist`
    -   Now you can activate and test the plugin on your system

When you're done with the development you can submit a [Pull Request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests) to this repository.

## Support

This code repository is not suitable for support requests. If you have a question or need assistence please access our [https://them.es/support](https://them.es/support) (PRO Add-on) or submit your question in the Support section of the WordPress Plugin directory (FREE version).

## Technology

-   [Gutenberg Block Editor](https://github.com/WordPress/gutenberg), [GPLv2+](https://github.com/WordPress/gutenberg/blob/master/LICENSE.md)
-   [Bootstrap](https://github.com/twbs/bootstrap), [MIT](https://github.com/twbs/bootstrap/blob/master/LICENSE)
-   [gulp](https://github.com/gulpjs/gulp), [MIT](https://github.com/gulpjs/gulp/blob/master/LICENSE)
-   [Sass](https://github.com/sass), [MIT](https://github.com/sass/dart-sass/blob/master/LICENSE)
-   [webpack](https://github.com/webpack/webpack), [MIT](https://github.com/webpack/webpack/blob/master/LICENSE)
-   [Geocoding with Nominatim OSM-Search](https://operations.osmfoundation.org/policies/nominatim), [GPLv2 license](https://github.com/osm-search/Nominatim)
-   PDF file generation
    -   [mPDF](https://github.com/mpdf/mpdf), [GPLv2](https://github.com/mpdf/mpdf/blob/development/LICENSE.txt)
    -   [Roboto Font](https://fonts.google.com/specimen/Roboto), [Apache License v2](http://www.apache.org/licenses/LICENSE-2.0)

## Copyright & License

Code and Documentation &copy; [them.es](https://them.es)
Code released under [GPLv2+](https://www.gnu.org/licenses/gpl-2.0.html)
