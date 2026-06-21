# Hunter x Recall
A React memory game themed around Hunter x Hunter, where players try to recall characters they have not clicked before and acheive the highest score possible.
<br>
Live Preview: https://hunter-x-recall.vercel.app/

## Overview
Hunter x Recall uses a open source API known as Jikan to fetch Hunter x Hunter character data. Each click from the player scores a point and re-shuffled the board. However, if the player clicks a character that has already been chosen, the round ends and a new round starts with the best score recorded if the score was beaten. If every called is recalled without error, the player passes the trial

## Home
<img width="1920" height="1265" alt="hunterxrecall-home" src="https://github.com/user-attachments/assets/7741ed27-5451-4937-bede-0e89d2f68233" />
<br>

## Successful Trial Modal
<img width="1920" height="1265" alt="hunterxrecall-win" src="https://github.com/user-attachments/assets/6d8faa35-8f35-4596-8350-bc2f7f6ba429" />
<br>

## Features
- On-mount character data is fetched from the Jikan API, trimmed down to the fields needed for the memory game
- Fisher-Yates shuffle ensures that the board does not have a predictable order
- Score and best score tracking, which is only overwritten best score is beaten
- A win state once every character has been recalled without error
- Hunter x Hunter inspired theme, and winner modal for a trial passed

## Tech Stack
- React
- Vite

## Getting Started
### Prerequisites
- Node.js

### Installation
1. Clone the repo
```bash
git clone https://github.com/Olly-Codes/hunter-x-recall.git
cd hunter-x-recall
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

## What I learned
- Understanding how React state updates are scheduled, not synchronus, and that reading state immediately after calling it's setter reflects the prior render's value

