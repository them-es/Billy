<?php

namespace Billy\Mpdf\Http;

use Billy\Psr\Http\Message\RequestInterface;

interface ClientInterface
{

	public function sendRequest(RequestInterface $request);

}
