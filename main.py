studentLists = eval(input("Input data student as Dic : "))

minScoreStudent = studentLists[0]["score"]  # current lowest score
nameMinScore = "" #store the name of lowest score

for student in studentLists:
    
    if minScoreStudent > student["score"]:

        minScoreStudent = student["score"] 
        nameMinScore = student["name"]

print("The lowest score student is ",nameMinScore,"have score : ",minScoreStudent,"pts.")

# [{ "name": "Alice", "score": 88 },{ "name": "Bob", "score": 76 },{ "name": "Charlie", "score": 92 },{ "name": "Diana", "score": 85 },{ "name": "Ethan", "score": 79 }]