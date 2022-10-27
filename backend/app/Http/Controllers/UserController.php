<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
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
       $User = new User ();
       $User -> name = $request->input('name');
       $User -> categorie = $request->input('categorie');
       $User -> themin = $request->input('themin');
       $User -> themax = $request->input('themax');
       $User -> crhmin = $request->input('crhmin');
       $User -> crhmax = $request->input('crhmax');
       $User -> crjmin = $request->input('crjmin');
       $User -> crjmax = $request->input('crjmax');
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
            'themin'=>$request->themax,
            'themax'=>$request->themax,
            'crhmin'=>$request->crhmin,
            'crhmax'=>$request->crhmax,
            'crjmin'=>$request->crjmin,
            'crjmax'=>$request->crjmax,
            
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
        $user = User::find($id);
        $user -> delete();
        return response()->json('success');
    }
}
