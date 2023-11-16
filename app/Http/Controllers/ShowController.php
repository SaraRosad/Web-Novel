<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Http\Client;

class ShowController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = [
            "novelId" => 2,
            "name" => "Side Character Transmigrations: The Final Boss is No Joke",
            "slug" => "side-character-transmigrations-the-final-boss-is-no-joke",
            "description" => "System: Host, what is that thing in the sky?Shi Sheng: An intergalactic spaceship.System: …This is a cultivation world, where did an intergalactic spaceship come from?!—System: Host, what are you holding in your hand?Shi Sheng: Xuanyuan Sword.System: This is an advanced scientific world, where did an ancient divine sword come from?! Wait a moment… Host what are you doing?! Σ(°△°|||)︴Shi Sheng: Breaking apart the main couple. ヾ(^▽^*)))#MyHostIsTooPowerfulAndLikesToBreakShips#Note : ‘shipping’ is the term people use when they want two people to be a couple.",
            "locale" => "en_US",
            "status" => "Ongoing",
            "alternativeNames" => "",
            "related" => null,
        ];

        return view('show', compact('data'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
