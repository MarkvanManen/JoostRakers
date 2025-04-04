<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CozyTables - Match Profiles</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #FAE5D3;
            color: #5A3E36;
            text-align: center;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 50px auto;
            padding: 20px;
            background-color: #FFF5E1;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        .btn {
            display: inline-block;
            background-color: #D2691E;
            color: white;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 10px;
            cursor: pointer;
        }
        .btn:hover {
            background-color: #A0522D;
        }
        .profile-card {
            background-color: #FAD2A5;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            margin-top: 20px;
        }
        .profile-card img {
            max-width: 500px;
            min-width: 500px;
            max-height: 400px;
            min-height: 400px;
            border-radius: 50%;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
<div class="container">
    <h1>Find Your Match</h1>
    <div class="profile-card" id="profile-card">
        <img id="profile-img" src="/mnt/data/A_portrait_of_an_elderly_woman_with_a_warm_smile,_.png" alt="Profile Picture">
        <h3 id="profile-name"></h3>
        <p><strong>Age:</strong> <span id="profile-age"></span></p>
        <p><strong>City:</strong> <span id="profile-city"></span></p>
        <p><strong>Hobbies:</strong> <span id="profile-hobbies"></span></p>
        <button class="btn" onclick="nextProfile(true)">Yes</button>
        <button class="btn" onclick="nextProfile(false)">No</button>
    </div>
</div>
<script>
    const profiles = [
    { name: "Alice Johnson", age: 68, city: "New York", hobbies: "Painting, Gardening, Classical Music", img: "C:/Users/Mark/Desktop/Matchmaking/img/w1.jpg" },
    { name: "Robert Smith", age: 72, city: "Los Angeles", hobbies: "Fishing, Chess, Hiking", img: "C:/Users/Mark/Desktop/Matchmaking/img/m1.jpg" },
    { name: "Margaret Wilson", age: 70, city: "Chicago", hobbies: "Reading, Knitting, Baking", img: "C:/Users/Mark/Desktop/Matchmaking/img/w2.jpg" },
    { name: "John Davis", age: 75, city: "Houston", hobbies: "Woodworking, Golf, History", img: "C:/Users/Mark/Desktop/Matchmaking/img/m2.jpg" },
    { name: "Linda Brown", age: 66, city: "Phoenix", hobbies: "Yoga, Cooking, Piano", img: "C:/Users/Mark/Desktop/Matchmaking/img/w3.jpg" },
    { name: "George Miller", age: 74, city: "Philadelphia", hobbies: "Photography, Cycling, Bird Watching", img: "C:/Users/Mark/Desktop/Matchmaking/img/m3.jpg" },
    { name: "Patricia Martinez", age: 69, city: "San Antonio", hobbies: "Travel, Puzzles, Volunteering", img: "C:/Users/Mark/Desktop/Matchmaking/img/w4.jpg" },
    { name: "Frank White", age: 76, city: "San Jose", hobbies: "Astronomy, Baking, Board Games", img: "C:/Users/Mark/Desktop/Matchmaking/img/m4.jpg" },
    { name: "Helen Garcia", age: 71, city: "Dallas", hobbies: "Dancing, Sewing, Theater", img: "C:/Users/Mark/Desktop/Matchmaking/img/w5.jpg" },
    { name: "Edward Lee", age: 73, city: "San Diego", hobbies: "Poetry, Playing Cards, Gardening", img: "C:/Users/Mark/Desktop/Matchmaking/img/m5.jpg" }
];

let currentIndex = 0;

function showProfile(index) {
    const profile = profiles[index];
    document.getElementById("profile-img").src = profile.img;
    document.getElementById("profile-name").innerText = profile.name;
    document.getElementById("profile-age").innerText = profile.age;
    document.getElementById("profile-city").innerText = profile.city;
    document.getElementById("profile-hobbies").innerText = profile.hobbies;
}

function nextProfile(liked) {
    if (liked) {
        window.location.href = "restaurant.html?match=" + encodeURIComponent(profiles[currentIndex].name);
                return;
    }
    currentIndex = (currentIndex + 1) % profiles.length;
    showProfile(currentIndex);
}

// Initialize first profile
showProfile(currentIndex);
</script>
</body>
</html>
