<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\testlara;

class testlaraController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $produit = testlara::all();
        return $produit;
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
        $testlara = new testlara ();
        $testlara -> name = $request->input('name');
        $testlara -> categorie = $request->input('categorie');
        $testlara -> niveau = $request->input('niveau');
        $testlara -> accompagnement = $request->input('accompagnement');
        $testlara -> supports = $request->input('supports');
        $testlara -> outilsformation = $request->input('outilsformation');
        $testlara -> logiciel = $request->input('logiciel');
        $testlara -> plateformes = $request->input('plateformes');
        $testlara -> save();
        
        return response () ->json([
            'status' => 200,
            'message' => 'Ajout avec succes'
        ]);
    
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
        return response()->json(testlara::whereId($id)->first());
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
        $testlara = testlara::whereId($id)->first();

        $testlara->update([
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
        $testlara = testlara::find($id);
        $testlara -> delete();
        return response()->json('success');
    }
}
