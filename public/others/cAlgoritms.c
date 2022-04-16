#include <stdio.h>
#include <stdlib.h>

struct Persona{
int Matricola;
int Bellezza;
int Soldi;
int Tezzo;
struct Persona *next;
};
typedef struct Persona Per;
typedef Per *Testa;


void AggCoda(Testa *Lista, int a, int b, int c, int d){
Testa aux;
if(*Lista==NULL){
aux=malloc(sizeof(Per));
aux->Matricola=a;
aux->Bellezza=b;
aux->Soldi=c;
aux->Tezzo=d;
aux->next=NULL;
*Lista=aux;
}
else AggCoda(&((*Lista)->next), a, b, c,d);
}


void LeggiLista(Testa *Lista){
int a, b, c, d;
scanf("%d %d %d %d", &a, &b, &c, &d);
if(a!=640238&&a!=636472){
AggCoda(Lista, a, b, c, d);
LeggiLista(&((*Lista)->next));
}
}


void AggTesta(Testa *Lista, int a, int b, int c, int d){
Testa aux;
aux=malloc(sizeof(Per));
aux->Matricola=a;
aux->Bellezza=b;
aux->Soldi=c;
aux->Tezzo=d;
if(*Lista==NULL) {
	aux->next=NULL;
	*Lista=aux;
} else {
	aux->next=*Lista;
	*Lista=aux;
}


}

void InserzioneOrdinataBellezza(Testa *Listb, int a, int b, int c, int d){
if(*Listb==NULL){
AggTesta(Listb, a, b, c, d);
}
else if((*Listb)->Bellezza<b){
AggTesta(Listb, a, b, c, d);
} else InserzioneOrdinataBellezza(&((*Listb)->next), a, b, c, d);
}


void ScorriBellezza(Testa *Listb, Testa Lista){
if(Lista!=NULL){
InserzioneOrdinataBellezza(Listb, Lista->Matricola, Lista->Bellezza, Lista->Soldi, Lista->Tezzo);
ScorriBellezza(Listb, Lista->next);
}
}


void InserzioneOrdinataSoldi(Testa *Listc, int a, int b, int c, int d){
if(*Listc==NULL){
AggTesta(Listc, a, b, c, d);
}
else if((*Listc)->Soldi<c){
AggTesta(Listc, a, b, c, d);
} else InserzioneOrdinataSoldi(&((*Listc)->next), a, b, c, d);
}


void ScorriSoldi(Testa *Listc, Testa Lista){
if(Lista!=NULL){
InserzioneOrdinataSoldi(Listc, Lista->Matricola, Lista->Bellezza, Lista->Soldi, Lista->Tezzo);
ScorriSoldi(Listc, Lista->next);
}
}




void StampaLista(Testa Lista){
if(Lista!=NULL){
printf("Matricola:%d\n Bellezza:%d\n Soldi:%d\n Tezzo:%d\n\n", Lista->Matricola, Lista->Bellezza, Lista->Soldi, Lista->Tezzo);
StampaLista(Lista->next);
}
}





void InserzioneOrdinataTezzo(Testa *Listt, int a, int b, int c, int d){
if(*Listt==NULL){
AggTesta(Listt, a, b, c, d);
}
else if(((*Listt)->Bellezza+(*Listt)->Soldi+(*Listt)->Tezzo)<(b+c+d)){
AggTesta(Listt, a, b, c, d);
} else InserzioneOrdinataTezzo(&((*Listt)->next), a, b, c, d);
}

void ScorriTezzo(Testa *Listt, Testa Lista){
if(Lista!=NULL){
InserzioneOrdinataTezzo(Listt, Lista->Matricola, Lista->Bellezza, Lista->Soldi, Lista->Tezzo);
ScorriTezzo(Listt, Lista->next);
}
}



int main(){
int a, b, c, d;
Testa Lista=NULL, Listb=NULL, Listc=NULL, Listt=NULL;

LeggiLista(&Lista);
printf("Ecco la lista di matricole:\n");
StampaLista(Lista);

ScorriBellezza(&Listb, Lista);
printf("Ecco le bellezze in ordine decrescente:\n");
StampaLista(Listb);

ScorriSoldi(&Listc, Lista);
printf("Ecco i soldi in ordine decrescente:\n");
StampaLista(Listc);

ScorriTezzo(&Listt, Lista);
printf("Ecco la media in ordine decrescente:\n");

StampaLista(Listt);

return 0;
}

