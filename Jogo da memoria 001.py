
import time

#funcção de limpar tela
def limpa_tela():
    MOVE_CURSOR_UP = "\033[1A"
    ERASE = "\x1b[2K"
    print((MOVE_CURSOR_UP + ERASE)*2,end="")
    print('\n'*50)
#printa matriz na tela  
def printa_matriz():
    print(matriz[0]["card"],matriz[1]["card"], matriz[2]["card"],matriz[3]["card"])
    print(matriz[4]["card"], matriz[5]["card"],matriz[6]["card"],matriz[7]["card"])
    #print(matriz[8]["card"],matriz[9]["card"],matriz[10]["card"],matriz[11]["card"])
    print ('') 


#Menu game instruções  
print('\n'*50)
print ('------------------------------------')
print ('C = Linguagem C, P = Python, R = Rust, J = Java, K = Korlin * = BOMB!')
print ('')



#Define Matriz
matriz = []

card0 = {"card":1,"linguagem":"J"}
card1 = {"card":2,"linguagem":"J"}
card2 = {"card":3,"linguagem":'P'}
card3 = {"card":4,"linguagem":"R"}
card4 = {"card":5,"linguagem":"R"}
card5 = {"card":6,"linguagem":"P"}
card6 = {"card":7,"linguagem":"J"}
card7 = {"card":8,"linguagem":"K"}

matriz.append(card0)
matriz.append(card1)
matriz.append(card2)
matriz.append(card3)
matriz.append(card4)
matriz.append(card5)
matriz.append(card6)
matriz.append(card7)




printa_matriz()


# MENU DE IMPUT de CARTA
carta_1 = input("Escolha PRIMEIRA carta: ")
print (carta_1)
carta_1_em_int = int(carta_1)
carta_1_em_int = carta_1_em_int-1
print ('')
print (carta_1_em_int)
print ('')
print ("carta", carta_1_em_int+1, "é:",  matriz[carta_1_em_int]["linguagem"])
print ('')


carta_2 = input("Escolha SEGUNDA carta: ")

carta_2_em_int = int(carta_2)
carta_2_em_int = carta_2_em_int-1
print ('')
print (carta_2_em_int)
print ('')
print ("carta", carta_2_em_int+1, "é:", matriz[carta_2_em_int]["linguagem"])
print ('')

#print Resultado de comparação
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

  
#time.sleep(40)

#limpa_tela()
#print ('tempo sleep passou!')
#time.sleep(4)


    