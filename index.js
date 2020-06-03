const generateMergeSortBlocks = (numbers = []) => {
  for (let i = 0; i < numbers.length; i += 1) {
    const value = numbers[i];

    const block = document.createElement("div");
    block.classList.add("block-merge-sort");
    block.style.height = `${value * 3}px`;
    block.style.transform = `translateX(${i * 30}px)`;

    const blockLabel = document.createElement("label");
    blockLabel.classList.add("block-merge-sort__id");
    blockLabel.innerHTML = value;

    block.appendChild(blockLabel);
    document.getElementById("container-merge-sort").appendChild(block);
  }
}

const generateRandomNumbers = (length = 20) => {
  const res = [];
  while (res.length < length) {
    res.push(Math.floor(Math.random() * 100))
  }

  return res;
}

function swap(el1, el2) {
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
        document.getElementById("container-merge-sort").insertBefore(el2, el1);
        resolve();
      }, 250);
    });
  });
}

async function animateMergeSort(delay = 100) {
  document.getElementById('btn-start-merge-sort').removeEventListener('click', animateMergeSort);

  let blocks = document.querySelectorAll(".block-merge-sort");

  // for (let i = 0; i < blocks.length; i++) {
    
  // }
  // for (let i = 0; i < blocks.length - 1; i += 1) {
  //   for (let j = 0; j < blocks.length - i - 1; j += 1) {
  //     blocks[j].style.backgroundColor = "#FF4949";
  //     blocks[j + 1].style.backgroundColor = "#FF4949";

  //     await new Promise(resolve =>
  //       setTimeout(() => {
  //         resolve();
  //       }, delay)
  //     );

  //     const value1 = Number(blocks[j].childNodes[0].innerHTML);
  //     const value2 = Number(blocks[j + 1].childNodes[0].innerHTML);

  //     if (value1 > value2) {
  //       await swap(blocks[j], blocks[j + 1]);
  //       blocks = document.querySelectorAll(".block-merge-sort");
  //     }

  //     blocks[j].style.backgroundColor = "#58B7FF";
  //     blocks[j + 1].style.backgroundColor = "#58B7FF";
  //   }

  //   blocks[blocks.length - i - 1].style.backgroundColor = "#13CE66";
  // }
}

(function () {
  generateMergeSortBlocks(generateRandomNumbers());
  document.getElementById('btn-start-merge-sort').addEventListener('click', animateMergeSort);
})()