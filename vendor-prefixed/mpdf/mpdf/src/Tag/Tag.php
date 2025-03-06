<?php

namespace Billy\Mpdf\Tag;

use Billy\Mpdf\Strict;

use Billy\Mpdf\Cache;
use Billy\Mpdf\Color\ColorConverter;
use Billy\Mpdf\CssManager;
use Billy\Mpdf\Form;
use Billy\Mpdf\Image\ImageProcessor;
use Billy\Mpdf\Language\LanguageToFontInterface;
use Billy\Mpdf\Mpdf;
use Billy\Mpdf\Otl;
use Billy\Mpdf\SizeConverter;
use Billy\Mpdf\TableOfContents;

abstract class Tag
{

	use Strict;

	/**
	 * @var \Billy\Mpdf\Mpdf
	 */
	protected $mpdf;

	/**
	 * @var \Billy\Mpdf\Cache
	 */
	protected $cache;

	/**
	 * @var \Billy\Mpdf\CssManager
	 */
	protected $cssManager;

	/**
	 * @var \Billy\Mpdf\Form
	 */
	protected $form;

	/**
	 * @var \Billy\Mpdf\Otl
	 */
	protected $otl;

	/**
	 * @var \Billy\Mpdf\TableOfContents
	 */
	protected $tableOfContents;

	/**
	 * @var \Billy\Mpdf\SizeConverter
	 */
	protected $sizeConverter;

	/**
	 * @var \Billy\Mpdf\Color\ColorConverter
	 */
	protected $colorConverter;

	/**
	 * @var \Billy\Mpdf\Image\ImageProcessor
	 */
	protected $imageProcessor;

	/**
	 * @var \Billy\Mpdf\Language\LanguageToFontInterface
	 */
	protected $languageToFont;

	const ALIGN = [
		'left' => 'L',
		'center' => 'C',
		'right' => 'R',
		'top' => 'T',
		'text-top' => 'TT',
		'middle' => 'M',
		'baseline' => 'BS',
		'bottom' => 'B',
		'text-bottom' => 'TB',
		'justify' => 'J'
	];

	public function __construct(
		Mpdf $mpdf,
		Cache $cache,
		CssManager $cssManager,
		Form $form,
		Otl $otl,
		TableOfContents $tableOfContents,
		SizeConverter $sizeConverter,
		ColorConverter $colorConverter,
		ImageProcessor $imageProcessor,
		LanguageToFontInterface $languageToFont
	) {

		$this->mpdf = $mpdf;
		$this->cache = $cache;
		$this->cssManager = $cssManager;
		$this->form = $form;
		$this->otl = $otl;
		$this->tableOfContents = $tableOfContents;
		$this->sizeConverter = $sizeConverter;
		$this->colorConverter = $colorConverter;
		$this->imageProcessor = $imageProcessor;
		$this->languageToFont = $languageToFont;
	}

	public function getTagName()
	{
		$tag = get_class($this);
		return strtoupper(str_replace('Billy\Mpdf\Tag\\', '', $tag));
	}

	protected function getAlign($property)
	{
		$property = strtolower($property);
		return array_key_exists($property, self::ALIGN) ? self::ALIGN[$property] : '';
	}

	abstract public function open($attr, &$ahtml, &$ihtml);

	abstract public function close(&$ahtml, &$ihtml);

}
