const textInput = document.querySelector("#textInput");
const addBtn = document.querySelector("#addBtn");
const listGroup = document.querySelector("#listGroup")
const totalList = document.querySelector("#totalList")
const totalDoneList = document.querySelector("#totalDoneList")

// 2 => count total list 
const countList = () => {
    const lists = document.querySelectorAll(".list")
    totalList.innerText = lists.length
}

// 3 => count done list 
const countDoneList = () => {
    const lists = document.querySelectorAll(".list input:checked")
    totalDoneList.innerText = lists.length
}

// 1 => create list
const createList = (text) => {
  const list = document.createElement("div");
  list.classList.add("list");
  list.innerHTML = `<div class=" flex justify-between items-center border py-3 px-2 mb-3">
          <div class=" flex gap-1">
            <input type="checkbox" class="doneCheck accent-gray-700" />

          <p class=" text-lg font-semibold font-mono listText ">${text}</p>
          </div>

          <div class=" flex items-center gap-2">
            <button class=" border px-2 py-1.5 editBtn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
            </button>

            <button class=" border px-2 py-1.5 deleteBtn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </button>
          </div>
        </div>`;

        const doneCheck = list.querySelector(".doneCheck")
        const listText = list.querySelector(".listText")
        const deleteBtn = list.querySelector(".deleteBtn")
        const editBtn = list.querySelector(".editBtn")

        // 3 => done check
        doneCheck.addEventListener("change",() => {
            listText.classList.toggle("line-through")
            countDoneList()
            if(doneCheck.checked){
                editBtn.setAttribute("disabled","true")
            }else{
                editBtn.removeAttribute("disabled")
            }
        })

        // 4 => delete 
        deleteBtn.addEventListener("click",() => {
            if(window.confirm("Are you sure to delete")){
                list.remove()
                countList()
                countDoneList()
            }
        })

        // 5 => edit 
        editBtn.addEventListener("click",() => {
            const input = document.createElement("input")
            // input.classList.add("border","w-[300px]")
            input.className = "border w-[230px] px-2"
            input.value = listText.innerText
            input.focus()
            listText.after(input)
            listText.classList.add("hidden")

            input.addEventListener("blur",() => {
                input.classList.add("hidden")
                listText.classList.remove("hidden")
                listText.innerText = input.value
            })
        })
  return list;
};

addBtn.addEventListener("click", () => {
  const todoText = textInput.value;
  listGroup.append(createList(todoText))
  countList()
  textInput.value = "";
});
