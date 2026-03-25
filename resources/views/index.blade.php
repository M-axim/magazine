<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Тестовый запуск</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <script src="https://unpkg.com/html5-qrcode@2.0.9/dist/html5-qrcode.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <script lang="javascript" src="https://cdn.sheetjs.com/xlsx-0.20.0/package/dist/xlsx.full.min.js"></script>
    <style>
        .scroll::-webkit-scrollbar {
            width: 12px;               /* ширина scrollbar */
        }
        .scroll::-webkit-scrollbar-track {
            background: var(--bs-primary-rgb: 13, 110, 253);        /* цвет дорожки */
        }
        .scroll::-webkit-scrollbar-thumb {
            background-color: blue;    /* цвет плашки */
            border-radius: 20px;       /* закругления плашки */
            border: 3px solid white;  /* padding вокруг плашки */
        }
    </style>
</head>
<body class="bg-dark d-grid bg-gradient" style="height: 100vh; --bs-bg-opacity: .2">
    <div id="app">
        <v-header></v-header>
        <main>
            <router-view></router-view>
        </main>
    </div>

<script src="{{ asset('js/manifest.js') }}"></script>
<script src="{{ asset('js/vendor.js') }}"></script>
<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>