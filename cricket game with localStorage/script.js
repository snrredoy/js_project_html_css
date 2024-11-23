let countStr = localStorage.getItem("count");
      let count;
      resetCount(countStr);

      function resetCount(countStr) {
        count = countStr ? JSON.parse(countStr) : { win: 0, draw: 0, lose: 0 };
        const winCount = document.getElementById("winCount");
        const drawCount = document.getElementById("drawCount");
        const loseCount = document.getElementById("loseCount");

        winCount.textContent = count.win;
        drawCount.textContent = count.draw;
        loseCount.textContent = count.lose;
      }
      function gameWinner(playerChoice) {
        const choices = ["Bat", "Ball", "Stump"];
        const randomIndex = Math.floor(Math.random() * 3);
        const computerChoice = choices[randomIndex];

        let result;
        if (playerChoice === computerChoice) {
          count.draw++;
          result = "Draw";
        } else if (
          (playerChoice === "Bat" && computerChoice === "Ball") ||
          (playerChoice === "Ball" && computerChoice === "Stump") ||
          (playerChoice === "Stump" && computerChoice === "Bat")
        ) {
          count.win++;
          result = "You Win";
        } else {
          count.lose++;
          result = "Computer Wins";
        }

        localStorage.setItem("count", JSON.stringify(count));

        const yourResult = document.querySelector(".yourResult");
        yourResult.textContent = `You choose ${playerChoice}`;

        const computerResult = document.querySelector(".computerResult");
        computerResult.textContent = `Computer choose ${computerChoice}`;

        const finalResult = document.querySelector(".finalResult");
        finalResult.textContent = result;

        if (result === "You Win") {
          finalResult.style.color = "green";
        } else if (result === "Computer Wins") {
          finalResult.style.color = "red";
        } else {
          finalResult.style.color = "black";
        }

        const winCount = document.getElementById("winCount");
        const drawCount = document.getElementById("drawCount");
        const loseCount = document.getElementById("loseCount");

        winCount.textContent = count.win;
        drawCount.textContent = count.draw;
        loseCount.textContent = count.lose;
      }
