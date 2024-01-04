<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Http\Controllers;
class CORS
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // header('Access-control-allow-Origin : *');
        // header('Access-control-allow-Origin : Content-type, X-Auth-Token, Authorization, Origin');
        return $next($request);
    }
}
