<?php

if (!function_exists('billy_dd')) {
	function billy_dd(...$args)
	{
		if (function_exists('dump')) {
			dump(...$args);
		} else {
			var_dump(...$args);
		}
		die;
	}
}
