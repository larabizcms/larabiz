<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>LaraBiz</title>

    <link href="{{ mix('css/app.css', 'build') }}" rel="stylesheet">
</head>
<body>
    <div id="app"></div>

    <script src="{{ mix('js/manifest.js', 'build') }}"></script>
    <script src="{{ mix('js/vendor-core.min.js', 'build') }}"></script>
    <script src="{{ mix('js/vendor.js', 'build') }}"></script>
    <script src="{{ mix('js/app.js', 'build') }}"></script>
</body>
</html>
