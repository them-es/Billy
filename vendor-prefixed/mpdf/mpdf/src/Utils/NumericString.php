<?php

namespace Billy\Mpdf\Utils;

class NumericString
{

	public static function containsPercentChar($string)
	{
		return strstr($string, '%');
	}

	public static function removePercentChar($string)
	{
		return str_replace('%', '', $string);
	}

}
