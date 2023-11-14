@extends('layouts.app')


@section('content')
    <!-- ======= About Section ======= -->
    @include('components.welcome.section-about')

    <!-- ======= Speakers Section ======= -->
    @include('components.welcome.section-pokemons')

   {{--  <!-- ======= Schedule Section ======= -->
    @include('components.welcome.section-schedule')

    <!-- ======= Venue Section ======= -->
    @include('components.welcome.section-venue') --}}

    <!-- ======= Hotels Section ======= -->
    {{-- @include('components.welcome.section-hotels') --}}

    <!-- ======= Gallery Section ======= -->
    @include('components.welcome.section-gallery')

    <!-- ======= Supporters Section ======= -->
    @include('components.welcome.section-supporters')

    <!-- =======  F.A.Q Section ======= -->
    @include('components.welcome.section-faq')

   {{--  <!-- ======= Subscribe Section ======= -->
    @include('components.welcome.section-subscribe')

    <!-- ======= Buy Ticket Section ======= -->
    @include('components.welcome.section-buyTicket')
 --}}
    <!-- ======= Contact Section ======= -->
    @include('components.welcome.section-contact')
@endsection
