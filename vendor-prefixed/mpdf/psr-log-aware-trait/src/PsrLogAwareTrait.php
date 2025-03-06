<?php

namespace Billy\Mpdf\PsrLogAwareTrait;

use Billy\Psr\Log\LoggerInterface;

trait PsrLogAwareTrait 
{

	/**
	 * @var \Billy\Psr\Log\LoggerInterface
	 */
	protected $logger;

	public function setLogger(LoggerInterface $logger): void
	{
		$this->logger = $logger;
	}
	
}
