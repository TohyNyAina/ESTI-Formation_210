<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\tarif;

class tarifController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $produit = tarif::all();
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
       $User = new tarif ();
       $User -> client = $request->input('client');
       $User -> prenomclient = $request->input('prenomclient');
       $User -> tel = $request->input('tel');
       $User -> email = $request->input('email');
       $User -> pay = $request->input('pay');
       $User -> num = $request->input('num');
       $User -> name = $request->input('name');
       $User -> categorie = $request->input('categorie');
       $User -> save();

       return response () ->json([
            'status' => 200,
            'message' => 'Ajout avec succes'
       ]);
        // if (User::create([$request->all()])){
        //     return response()->json('successfully created');
        // }
        // else{
        //     return("error");
        // }
       
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
        return response()->json(tarif::whereId($id)->first());
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
        $user = tarif::whereId($id)->first();

        $user->update([
            'client'=>$request->client,
            'prenomclient'=>$request->prenomclient,
            'tel'=>$request->tel,
            'email'=>$request->email,
            'pay'=>$request->pay,
            'num'=>$request->num,
            'name'=>$request->name,
            'categorie'=>$request->categorie,
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
        $tarif = tarif::find($id);
        $tarif -> delete();
        return response()->json('success');
    }
}

