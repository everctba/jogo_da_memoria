print ('C = Linguagem C, P = Python, R = Rust, J = Java, K = Korlin * = BOMB!')
print ('')
matriz = []
##card2 = dict()
card0 = {"card":1,"linguagem":"*"}
card1 = {"card":2,"linguagem":"*"}
card2 = {"card":3,"linguagem":'P'}
card3 = {"card":4,"linguagem":"R"}
card4 = {"card":5,"linguagem":"R"}
card5 = {"card":6,"linguagem":"P"}
card6 = {"card":7,"linguagem":"J"}
card7 = {"card":8,"linguagem":"K"}
card8 = {"card":9,"linguagem":"K"}
card9 = {"card":10,"linguagem":"J"}
matriz.append(card0)
matriz.append(card1)
matriz.append(card2)
matriz.append(card3)
matriz.append(card4)
matriz.append(card5)
matriz.append(card6)
matriz.append(card7)
matriz.append(card8)
matriz.append(card9)
print(matriz[0]["card"],matriz[1]["card"], matriz[2]["card"])
print(matriz[3]["card"],matriz[4]["card"], matriz[5]["card"])
print(matriz[6]["card"],matriz[7]["card"], matriz[8]["card"])
print ('')
carta_1 = input("Escolha PRIMEIRA carta: ")
# print (carta_1)
carta_1_em_int = int(carta_1)
carta_2_em_int = carta_1_em_int-1
print ('')
print (carta_1_em_int)
print ('')
print (matriz[carta_1_em_int]["linguagem"])
print ('')


carta_2 = input("Escolha SEGUNDA carta: ")

carta_2_em_int = int(carta_2)
carta_2_em_int = carta_2_em_int-1
print ('')
print (carta_2_em_int)
print ('')
print (matriz[carta_2_em_int]["linguagem"])
print ('')
resultado1 = matriz[carta_1_em_int]["linguagem"]

resultado2 = matriz[carta_2_em_int]["linguagem"]

str(resultado1)
str(resultado2)

print (resultado1 + " & " + resultado2)


if  resultado1 == resultado2:
    print ('Parabéns, você ACERTOU!')
    print ('')
    #print ('Escolha novas cartas') 
    print ('------------------------')
else:
    print ('você ERROU!')
    print (' ')
    print ('Tente novamente nesta próxima jogada') 
    print (' ---------------------------------')

  
#sleep(1)

