<?php

namespace App\Http\Controllers;

use App\Http\Requests\Todo\StoreRequest;
use App\Http\Requests\Todo\UpdateRequest;
use App\Models\Todo;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class TodoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Todos/Index', [
            'todos' => fn() => Todo::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRequest $request)
    {
        $attributes = $request->safe()->all();

        Todo::create($attributes);

        return Redirect::route('todos.index')->with([
            'status' => 'success',
            'message' => 'Tarea creada.'
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRequest $request, Todo $todo)
    {
        $attributes = $request->safe()->all();

        $todo->update($attributes);

        return Redirect::route('todos.index')->with([
            'status' => 'success',
            'message' => 'Tarea actualizada.',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Todo $todo)
    {
        $todo->delete();

        return Redirect::route('todos.index');
    }
}
