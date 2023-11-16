<?php
    $curl = curl_init();

    curl_setopt_array($curl, [
        CURLOPT_URL => "https://novelhall-webonvel.p.rapidapi.com/novels/1",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "GET",
        CURLOPT_HTTPHEADER => [
            "X-RapidAPI-Host: novelhall-webonvel.p.rapidapi.com",
            "X-RapidAPI-Key: 2f0e7d3dfcmshe1836446ab79b26p189cd1jsn74a5f7ee94f2"
        ],
    ]);

    $response = curl_exec($curl);
    $err = curl_error($curl);

    curl_close($curl);

    if ($err) {
        echo "cURL Error #:" . $err;
    } else {
        echo $response;
    }
