
# Trabalho desenvolvido por:
# Diogo Felipe
# Everson Mayer
# Jhairo Joel

import random 
import time
continuar_jogando = True
# ja_virou = False
numeros_de_cartas = 8
contador_de_game_terminado = 0
contador_lista_match = 0
#funcção de limpar tela
def limpa_tela():
    # MOVE_CURSOR_UP = "\033[1A"
    # ERASE = "\x1b[2K"
    # print((MOVE_CURSOR_UP + ERASE)*2,end="")
    print('\n'*50)
#printa matriz na tela  
def printa_matriz():
    print(matriz[0]["card"],matriz[1]["card"], matriz[2]["card"],matriz[3]["card"])
    print(matriz[4]["card"], matriz[5]["card"],matriz[6]["card"],matriz[7]["card"])
    #print(matriz[8]["card"],matriz[9]["card"],matriz[10]["card"],matriz[11]["card"])
    print ('') 
    
def menu_instrucoes():
    #Menu game instruções  
    print('\n'*50)
    print ('Desenvolvido por Diogo Felipe, Everson Mayer e Jhairo Joel')
    print ('-------------------------------------------------')
    print ('A = Abacaxi, B = Banana, L = Laranja, M = Morango')
    print ('')




#Define Matriz
matriz = []

#Cartas aleatórias
posiveis_cartas = ["L","L","A","B","A","B","M","M"]
lista_de_cartas_aletorias = []
listas_de_match = []


while len(posiveis_cartas) > 0:

    tamanho_lista_atual = len(posiveis_cartas)
    # print (' ')
    # pega um numero aleatório
    carta_aleatoria = random.choice(posiveis_cartas)
    # ADiciona card aleatorio a lista aleatoria
    lista_de_cartas_aletorias.append(carta_aleatoria)
    # print ('carta_aleatoria:', carta_aleatoria)
    # print (' ')
    # print ('tamanho_lista_atual: ',tamanho_lista_atual)
    carta_selecionada = carta_aleatoria
    
    #Remove uma carta da lista
    posiveis_cartas.remove(carta_aleatoria)
    # print ('Lista menos item:', posiveis_cartas)
    # time.sleep(0.5)
# print ('--------------------')
# print ('Lista distribuida aleatoriamente:', lista_de_cartas_aletorias)
# print ('--------------------')
card0 = {"card":1,"linguagem":lista_de_cartas_aletorias[0]}
card1 = {"card":2,"linguagem":lista_de_cartas_aletorias[1]}
card2 = {"card":3,"linguagem":lista_de_cartas_aletorias[2]}
card3 = {"card":4,"linguagem":lista_de_cartas_aletorias[3]}
card4 = {"card":5,"linguagem":lista_de_cartas_aletorias[4]}
card5 = {"card":6,"linguagem":lista_de_cartas_aletorias[5]}
card6 = {"card":7,"linguagem":lista_de_cartas_aletorias[6]}
card7 = {"card":8,"linguagem":lista_de_cartas_aletorias[7]}

matriz.append(card0)
matriz.append(card1)
matriz.append(card2)
matriz.append(card3)
matriz.append(card4)
matriz.append(card5)
matriz.append(card6)
matriz.append(card7)

#jogo começa aqui
while continuar_jogando:
    # se o jogador acertou todas as cartas então fim de jogo:
    if contador_de_game_terminado == 4:
        print ('') 
        limpa_tela()
        print ('Parabéns Campeão, você VENCEU!') 
        continuar_jogando = False
        break
    
    menu_instrucoes()
    printa_matriz()

    enter = ''

    # MENU DE IMPUT de CARTA
    carta_1 = input("Escolha da PRIMEIRA carta: ")
    if (carta_1 == enter):
        print("vc deu enter tenta denovo")
    while (carta_1 == enter) or (int(carta_1) > numeros_de_cartas) or (int(carta_1) <= 0) :
        print ('Favor digitar o número de uma das 8 cartas!')
        print ('------------------------')
        carta_1 = input("Escolha PRIMEIRA carta: ")
    compara_com_carta_1=carta_1
    carta_1_em_int = int(carta_1)
    carta_1_em_int = carta_1_em_int-1
    print ('')
    
    
    carta_1_linguagem = matriz[carta_1_em_int]["linguagem"]
    for i in listas_de_match:
        # print("linguage = ", i)
        while carta_1_linguagem == i: 
            # print("Essa carta ja foi virada = ", i) 
            carta_1 = input("Escolha uma PRIMEIRA carta que ainda não foi virada: ")
            while (carta_1 == enter) or (int(carta_1) > numeros_de_cartas) or (int(carta_1) <= 0):
                print ('Favor digitar o número de uma das 8 cartas!')
                print ('------------------------')
                carta_1 = input("Escolha PRIMEIRA carta: ")
                
            compara_com_carta_1=carta_1
            carta_1_em_int = int(carta_1)
            carta_1_em_int = carta_1_em_int-1  
            carta_1_linguagem = matriz[carta_1_em_int]["linguagem"]
            for j in listas_de_match:
                if carta_1_linguagem == j:
                    carta_1_linguagem = i 
                       
            # ja_virou = True
    
    print ("carta", carta_1_em_int+1, "é:",  matriz[carta_1_em_int]["linguagem"])
    print ('')
    #print ("numero da carta na memoria: ",carta_1_em_int)


    carta_2 = input("Escolha da SEGUNDA carta: ")
    
    #tratmento de erro se carta estiver fora do range
    while (carta_2 == enter) or (int(carta_2) > numeros_de_cartas) or (int(carta_2) <= 0):
        print ('Favor digitar o número de uma das 8 cartas!')
        print ('------------------------')
        carta_2 = input("Escolha SEGUNDA carta: ")
    
    #compara se cartas são as mesmas      
    while int(carta_2) == int(compara_com_carta_1):
        print ('Favor escolha uma carta diferente!')
        print ('------------------------')
        carta_2 = input("Escolha SEGUNDA carta: ")   
    carta_2_em_int = int(carta_2)
    carta_2_em_int = carta_2_em_int-1
    print ('')
    #print (carta_2_em_int)
    #print ('')
    print ("carta", carta_2_em_int+1, "é:", matriz[carta_2_em_int]["linguagem"])
    print ('')
    
    #COMPARA SE JÀ  FOI VIRADA A  SEGUNDA CARTA
    carta_2_linguagem = matriz[carta_2_em_int]["linguagem"]
    for i in listas_de_match:
        # print("linguage = ", i)
        while carta_2_linguagem == i: 
            # print("Essa carta ja foi virada = ", i) 
            carta_2 = input("Escolha uma SEGUNDA carta que ainda não foi virada: ")
            while (carta_2 == enter) or (int(carta_2) > numeros_de_cartas) or (int(carta_2) <= 0):
                print ('Favor digitar o número de uma das 8 cartas!')
                print ('------------------------')
                carta_2 = input("Escolha SEGUNDA carta: ")
                
            compara_com_carta_2=carta_2
            carta_2_em_int = int(carta_2)
            carta_2_em_int = carta_2_em_int-1  
            carta_2_linguagem = matriz[carta_2_em_int]["linguagem"]
            for j in listas_de_match:
                if carta_2_linguagem == j:
                    carta_2_linguagem = i 
    #print Resultado de comparação
    resultado1 = matriz[carta_1_em_int]["linguagem"]
    resultado2 = matriz[carta_2_em_int]["linguagem"]

    str(resultado1)
    str(resultado2)
    print('------------------------')
    print(resultado1 + " & " + resultado2)

    #compara se cartas são iguas 
    if  resultado1 == resultado2:
        
        listas_de_match.append(resultado1)
        contador_lista_match = contador_lista_match+1 
        # print ('listas_de_match = ', listas_de_match)
        contador_de_game_terminado = contador_de_game_terminado+1
        #Substitui o numero pelo nome da carta
        matriz[carta_1_em_int]["card"] = matriz[carta_1_em_int]["linguagem"]
        matriz[carta_2_em_int]["card"] = matriz[carta_2_em_int]["linguagem"]
        #5
        print ('Parabéns, você ACERTOU!')
        print ('')
        #print ('Escolha novas cartas') 
        print ('------------------------')
    else:
        print ('Você ERROU!')
        print (' ')
        print ('Tente novamente nesta próxima jogada') 
        print ('')

    
    time.sleep(2)
    
    limpa_tela()
    #print ('tempo sleep passou!')
    #time.sleep(4)
limpa_tela() 
   
printa_matriz()
print (' ')
print ('Parabéns Campeão, você VENCEU!')
print ("---------------------------------") 