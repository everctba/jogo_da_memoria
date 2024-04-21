
import random 
import time
continuar_jogando = True

numeros_de_cartas = 8
contador_de_game_terminado = 0
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
    
def menu_instrucoes():
    #Menu game instruções  
    print('\n'*50)
    print ('------------------------------------')
    print (' P = Python, R = Rust, J = Java, K = Korlin')
    print ('')




#Define Matriz
matriz = []

#Cartas aleatórias
posiveis_cartas = ["J","J","P","R","P","R","K","K"]
lista_de_cartas_aletorias = []

while len(posiveis_cartas) > 0:

    tamanho_lista_atual = len(posiveis_cartas)
    print (' ')
    # pega um numero aleatório
    carta_aleatoria = random.choice(posiveis_cartas)
    # ADiciona card aleatorio a lista aleatoria
    lista_de_cartas_aletorias.append(carta_aleatoria)
    print ('carta_aleatoria:', carta_aleatoria)
    print (' ')
    print ('tamanho_lista_atual: ',tamanho_lista_atual)
    carta_selecionada = carta_aleatoria
    
    #Remove uma carta da lista
    posiveis_cartas.remove(carta_aleatoria)
    print ('Lista menos item:', posiveis_cartas)
    time.sleep(0.5)
print ('--------------------')
print ('Lista distribuida aleatoriamente:', lista_de_cartas_aletorias)
print ('--------------------')
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


    # MENU DE IMPUT de CARTA
    carta_1 = input("Escolha da PRIMEIRA carta: ")
    if int(carta_1) > numeros_de_cartas:
        print ('Favor digitar o número de uma das 8 cartas!')
        ('------------------------')
        carta_1 = input("Escolha PRIMEIRA carta: ")
    carta_1_em_int = int(carta_1)
    carta_1_em_int = carta_1_em_int-1
    print ('')
    
    
    print ("carta", carta_1_em_int+1, "é:",  matriz[carta_1_em_int]["linguagem"])
    print ('')
    #print ("numero da carta na memoria: ",carta_1_em_int)


    carta_2 = input("Escolha da SEGUNDA carta: ")
    if int(carta_2) > numeros_de_cartas:
        print ('Favor digitar o número de uma das 8 cartas!')
        ('------------------------')
        carta_2 = input("Escolha SEGUNDA carta: ")
    carta_2_em_int = int(carta_2)
    carta_2_em_int = carta_2_em_int-1
    print ('')
    #print (carta_2_em_int)
    #print ('')
    print ("carta", carta_2_em_int+1, "é:", matriz[carta_2_em_int]["linguagem"])
    print ('')

    #print Resultado de comparação
    resultado1 = matriz[carta_1_em_int]["linguagem"]
    resultado2 = matriz[carta_2_em_int]["linguagem"]

    str(resultado1)
    str(resultado2)
    ('------------------------')
    print (resultado1 + " & " + resultado2)


    if  resultado1 == resultado2:
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

    
    time.sleep(3)
    
    limpa_tela()
    #print ('tempo sleep passou!')
    #time.sleep(4)
limpa_tela() 
   
printa_matriz()
print (' ')
print ('Parabéns Campeão, você VENCEU!')
print ("---------------------------------") 