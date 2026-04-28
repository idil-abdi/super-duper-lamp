# <img src='./img/EmojiStitch1.png' width='80px'> Find Stitch – Browser Game

A simple, fun memory and luck-based browser game built using **HTML**, **SASS**, and **JavaScript**.

The objective is simple:  
Find Stitch hidden inside a 3x3 grid — and try to beat your highest score!

---

## 🕹️ How the Game Works

### 🎲 Game Setup

- The game displays a **3x3 grid** (9 boxes).
- At the start of each round, **Stitch is randomly hidden** inside one of the boxes.
- The player has **3 attempts** to find Stitch.

---

### 🎯 Objective

Click on a box to guess where Stitch is hidden.

- If you find Stitch on your **first try**, you earn **3 points**.
- If you find Stitch on your **second try**, you earn **2 points**.
- If you find Stitch on your **third try**, you earn **1 point**.
- If you fail to find Stitch after 3 attempts it's **game over** and the game **restart**.

The game continues for **unlimited rounds**, and the goal is to **beat your highest score**. 

---

## Programming Language

### JavaScript Logic
 - When game starts users can click on any of the nine cards
    - once clicked the card flip 
    - Stitch will be a random number from 0-8
    - position of each card will be 0-8 
    - when position of card and stitch's position is the same
        -  users has find stitch and the back of the card shows an image of stitch. else show text of 'Not here'

 - user get 3 tries to find stitch
    - if user find him on the first try they get 3 points, second try 2 points and last try 1 point. 
    - the game keep strack of scores and log in the highest score.
    - if stitch not found Game Over. and whatever score does the user have will be the highest until high score is beaten