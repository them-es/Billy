<?php

namespace Billy\Mpdf\File;

class LocalContentLoader implements \Billy\Mpdf\File\LocalContentLoaderInterface
{

	public function load($path)
	{
		return file_get_contents($path);
	}

}
