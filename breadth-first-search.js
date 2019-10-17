const isFriend = (person) => (
    person === "xico"
);

const pushElements = (stackToInsert, array) => {
    array.forEach(element => stackToInsert.push(element))
};

const stackSearch = (stack, grafo) => {
    const checked = [];
    while (stack.length > 0) {
        const person = stack.shift();
        if (!checked.includes(person)) {
            if (isFriend(person)) {
                return true;
            }
            pushElements(stack, grafo[person]);
            checked.push(person);
        }
    }
    return false;
};


const grafo = {};
grafo["kevin"] = ["webster", "gustavo", "vinicius"];
grafo["webster"] = ["xico", "renan"];
grafo["gustavo"] = ["mi"];
grafo["vinicius"] = ["gabriel"];
grafo["xico"] = [];
grafo["renan"] = [];
grafo["mi"] = [];
grafo["gabriel"] = [];
const stack = [];
pushElements(stack, grafo["kevin"]);
console.log(stackSearch(stack, grafo));

const grafo2 = {};
grafo2["kevin"] = ["kauan"];
grafo2["kauan"] = ["lucas"];
grafo2["lucas"] = [];
const stack2 = [];
pushElements(stack2, grafo2["kevin"]);
console.log(stackSearch(stack2, grafo2));

