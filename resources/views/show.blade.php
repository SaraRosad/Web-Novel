@extends('layouts.app')

@section('content')

<div id="novel_display" class="magicpattern">
    <div class="novel-container">
            <a data-id="{{ $data['novelId'] }}"><h6 class="title">{{ $data["name"] }}</h6></a>


    </div>
</div>

@endsection
