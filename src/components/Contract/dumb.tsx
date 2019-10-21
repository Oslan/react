import React from "react";

import { ContractData } from "./types";

import moment from "moment";
import "moment/locale/pt-br";

moment.locale("pt-br");

const dataDeTeste = new Date("2019-09-02");

export const Contract = ({
  name,
  semester,
  course,
  enrollment,
  birthday,
  address
}: ContractData) => (
  <div>
    <h4>
      TERMO DE COMPROMISSO DE ESTÁGIO VOLUNTÁRIO VISANDO A
      FORMAÇÃO PROFISSIONAL, SEM VINCULAÇÃO EMPREGATÍCIA,
      NOS TERMOS DA LEI 6.494 DE 07.12.77.
    </h4>
    <p>
      ASMED Tecnologia Ltda, neste ato representada por.
      Altenor Gonçalves da Silva, na qualidade de CEO,
      situada à Rua 10 de Julho, 873 - Incubadora Uninorte
      empreende , na cidade de Manaus, estado do Amazonas,
      doravante denominada CONCEDENTE e o estudante{" "}
      <strong>{name}</strong>, regularmente matriculado no{" "}
      <strong>{semester}º período</strong> do curso de{" "}
      <strong>{course}</strong>, nº de matrícula{" "}
      <strong>{enrollment}</strong>, da Uninorte, nascido{" "}
      <strong>
        {moment(birthday).format("DD [de] MMMM [de] YYYY")}
      </strong>
      , residente e domiciliado(a) em{" "}
      <strong>{address}</strong>, doravante denominado(a)
      ESTAGIÁRIO(A), celebram o presente TERMO DE
      COMPROMISSO, mediante as cláusulas seguintes:
    </p>
    <p>
      CLÁUSULA PRIMEIRA: O(A) CONCEDENTE compromete-se a
      conceder ao (a) ESTAGIÁRIO(A), oportunidade de receber
      treinamento específico como prática dos ensinamentos
      teóricos que recebe na Universidade.
    </p>
    <p>
      CLÁUSULA SEGUNDA: O(A) ESTAGIÁRIO(A), compromete-se a:
    </p>
    <ul>
      <li>
        Cumprir o estágio, de acordo com o estabelecido na
        Cláusula Terceira, em jornada compatível com o seu
        horário escolar;
      </li>

      <li>
        Cumprir fielmente o programa de estágio, comunicando
        o(a) CONCEDENTE, em tempo hábil sua impossibilidade
        de desenvolvê-lo, quer quanto aos aspectos técnicos
        relacionados ao estágio propriamente dito, quer
        quanto aos horários e duração, fixados no presente
        Termo de Compromisso;
      </li>

      <li>
        Apresentar, na forma e segundo os padrões
        estabelecidos, relatório sobre as atividades de
        estágio ao(a) CONCEDENTE.
      </li>
    </ul>

    <p>
      CLÁUSULA TERCEIRA: O estágio será desenvolvido no(s)
      seguinte(s) horário(s): das 14h00 às 17h45, tendo que
      realizar o (a) ESTAGIÁRIO(A) 18h45 (dezoito horas e
      quarenta e cinco minutos) por semana.
    </p>

    <ul>
      <li>
        Parágrafo Primeiro: Qualquer mudança em relação ao
        horário do estágio, estabelecido na Cláusula
        Terceira, deverá resultar de prévio entendimento
        entre o(a) CONCEDENTE e o(a) ESTAGIÁRIO(A), ficando
        ressalvada a possibilidade do estágio compreender
        atividades tanto internas como externas.
      </li>
      <li>
        Parágrafo Segundo: Os serviços do ESTAGIÁRIO(A) são
        voluntários e o programa, não remunerado.
      </li>
    </ul>
    <p>
      CLÁUSULA QUARTA: Nos termos do art. 4o da Lei 6.494 de
      07.12.77 e do art 6o do Decreto 87.497, de 18.08.82, o
      estágio não caracterizará vínculo empregatício de
      qualquer natureza com o(a) CONCEDENTE.
    </p>
    <p>
      CLÁUSULA QUINTA: O estágio objeto do presente Termo de
      Compromisso, terá a duração de 17/09/2019 a
      13/12/2019, podendo ser interrompido a qualquer
      momento pelo(a) CONCEDENTE ou pelo(a) ESTAGIÁRIO(A),
      mediante simples comunicação por escrito de uma parte
      à outra, a ser feita com 05 (cinco) dias de
      antecedência, no mínimo.
    </p>
    <p>
      CLÁUSULA SEXTA: Fica eleito o Foro da Comarca de
      Manaus, Estado do Amazonas para dirimir eventuais
      dúvidas que surgirem em decorrência do presente
      compromisso, uma vez esgotadas todas as possibilidades
      de entendimento amigável entre as partes.
    </p>
    <p>
      E por estarem de acordo, as partes assinam o presente
      instrumento em 03 (três) vias de igual teor.
    </p>
    <p>
      Manaus, {moment().format("DD [de] MMMM [de] YYYY")}.
    </p>
  </div>
);
