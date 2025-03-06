<?php

namespace Billy\Mpdf\Container;

class SimpleContainer implements \Billy\Mpdf\Container\ContainerInterface
{

	private $services;

	public function __construct(array $services)
	{
		$this->services = $services;
	}

	public function get($id)
	{
		if (!$this->has($id)) {
			throw new \Billy\Mpdf\Container\NotFoundException(sprintf('Unable to find service of key "%s"', $id));
		}

		return $this->services[$id];
	}

	public function has($id)
	{
		return isset($this->services[$id]);
	}

	public function getServices()
	{
		return $this->services;
	}

}
