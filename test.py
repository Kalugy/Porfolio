"""
def saludar(nombre):
    return f"Hola, {nombre}!"

numeros = [10, 3, 7, 1, 5]
numeros.sort()
print("Lista ordenada:", numeros)

saludo = saludar("Julian")  
print(saludo)
"""

characters = [
    {
        "name": "Character 1",
        "health": 30,
        "attack": 10,
        "defense": 5,
        "level": 1
    },
    {
        "name": "Character 2",
        "health": 25,
        "attack": 12,
        "defense": 3,
        "level": 1
    }
]

def attack(character, target):
    target["health"] -= character["attack"] - target["defense"]
    character["level"] += 1
    
    if(target["health"] <= 0):
        print(target["name"] + " ha sido derrotado")
        target["health"] = 0
    


for character in characters:
    print(character)

#print(characters)
#print(characters[0]["name"])

def main():
    while(len(characters) > 1):
        if(characters[1]["health"] <= 0):
            print(characters[1]["name"] + " ha sido derrotado")
            characters.remove(characters[1])
            break

        print("Welcome to the game")
        print("1. Attack")
        print("2. Exit")
        choice = input("Enter your choice: ")
        if choice == "1":
            attack(characters[0], characters[1])
        elif choice == "2":
            print("Exiting the game")
            break
        else:
            print("Invalid choice")
        print(characters[0]["name"] + " has Attacked " + str(characters[0]["attack"]) + " attack")
        print(characters[1]["name"] + " has " + str(characters[1]["health"]) + " health")


    print("Game over")
    print("Winner: " + characters[0]["name"])

main()


