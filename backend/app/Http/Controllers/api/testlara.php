<?php

namespace App\Http\Controllers\api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\User;

class module extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $produit = User::all();
        return $produit;
        // return response()->json(User::latest()->get());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        User::create([
            'name'=>$request->name,
            'categorie'=>$request->categorie,
            'niveau'=>$request->niveau,
            'accompagnement'=>$request->accompagnement,
            'supports'=>$request->supports,
            'outilsformation'=>$request->outilsformation,
            'logiciel'=>$request->logiciel,
            'plateformes'=>$request->plateformes,
        ]);
        return response()->json('successfully created');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return response()->json(User::whereId($id)->first());
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = User::whereId($id)->first();

        $user->update([
            'name'=>$request->name,
            'categorie'=>$request->categorie,
            'niveau'=>$request->niveau,
            'accompagnement'=>$request->accompagnement,
            'supports'=>$request->supports,
            'outilsformation'=>$request->outilsformation,
            'logiciel'=>$request->logiciel,
            'plateformes'=>$request->plateformes,
            
        ]);
        return response()->json('success');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        User::whereId($id)->first()->delete();

        return response()->json('success');
    }
}
