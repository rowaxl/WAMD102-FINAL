const generateRandomNumbers = (length = 20) => {
  const res = [];
  while (res.length < length) {
    res.push(Math.floor(Math.random() * 100))
  }

  return res;
}

const generateBlocks = (method = 'bubble') => {
  const numbers = generateRandomNumbers();
  for (let i = 0; i < numbers.length; i += 1) {
    const value = numbers[i];

    const block = document.createElement("div");
    block.classList.add(`block-${method}-sort`);
    block.style.height = `${value * 3}px`;
    block.style.transform = `translateX(${i * 30}px)`;

    const blockLabel = document.createElement("label");
    blockLabel.classList.add(`block-${method}-sort__id`);
    blockLabel.innerHTML = value;

    block.appendChild(blockLabel);
    document.getElementById(`container-${method}-sort`).appendChild(block);
  }
}

function swap(board, el1, el2) {
  return new Promise(resolve => {
    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);

    const transform1 = style1.getPropertyValue("transform");
    const transform2 = style2.getPropertyValue("transform");

    el1.style.transform = transform2;
    el2.style.transform = transform1;

    // Wait for the transition to end!
    window.requestAnimationFrame(function() {
      setTimeout(() => {
        board.insertBefore(el2, el1);
        resolve();
      }, 250);
    });
  });
}

const animateBubbleSort = async (delay = 200) => {
  document.getElementById('btn-start-bubble-sort').removeEventListener('click', animateBubbleSort);
  let blocks = document.querySelectorAll(".block-bubble-sort");
  let board = document.getElementById("container-bubble-sort");

  for (let i = 0; i < blocks.length - 1; i += 1) {
    for (let j = 0; j < blocks.length - i - 1; j += 1) {
      blocks[j].style.backgroundColor = "#FF4949";
      blocks[j + 1].style.backgroundColor = "#FF4949";

      await new Promise(resolve =>
        setTimeout(() => {
          resolve();
        }, delay)
      );

      const value1 = Number(blocks[j].childNodes[0].innerHTML);
      const value2 = Number(blocks[j + 1].childNodes[0].innerHTML);

      if (value1 > value2) {
        await swap(board, blocks[j], blocks[j + 1]);
        blocks = document.querySelectorAll(".block-bubble-sort");
      }

      blocks[j].style.backgroundColor = "#58B7FF";
      blocks[j + 1].style.backgroundColor = "#58B7FF";
    }

    blocks[blocks.length - i - 1].style.backgroundColor = "#13CE66";
  }
}

(function () {
  generateBlocks('bubble');
  document.getElementById('btn-start-bubble-sort').addEventListener('click', animateBubbleSort);
})()