<template>
  <v-card :loading="loadingFetch" class="pa-3 d-none">
    <v-card-title>
      Telusur Proses
      <v-spacer />
      <v-btn color="grey darken-3" nuxt @click="print">
        <v-icon left dark> mdi-printer </v-icon>
        Print
      </v-btn>
    </v-card-title>
    <v-card-text class="white" style="overflow: scroll">
      <div
        id="printPaper"
        style="
          word-wrap: break-word;
          padding: 10px;
          background: white;
          color: black;
        "
      >
        <div class="WordSection1">
          <table
            class="MsoTableGrid"
            border="0"
            cellspacing="0"
            cellpadding="0"
            width="1029"
            style="width: 771.9pt; border-collapse: collapse; border: none"
          >
            <tr style="page-break-inside: avoid; height: 24.35pt">
              <td
                width="792"
                valign="bottom"
                style="
                  width: 594.3pt;
                  padding: 0cm 5.4pt 0cm 5.4pt;
                  height: 24.35pt;
                "
              >
                <p
                  class="MsoNormal"
                  style="margin-bottom: 0cm; line-height: normal"
                >
                  <img
                    width="54"
                    height="51"
                    :src="icon"
                    align="left"
                    hspace="12"
                  /><b
                    ><span lang="EN-US" style="font-size: 14pt"
                      >PT. WASKITA KARYA (Persero) Tbk</span
                    ></b
                  >
                </p>
              </td>
              <td
                width="237"
                style="
                  width: 177.6pt;
                  padding: 0cm 5.4pt 0cm 5.4pt;
                  height: 24.35pt;
                "
              >
                <table
                  class="MsoTableGrid"
                  border="1"
                  cellspacing="0"
                  cellpadding="0"
                  width="222"
                  style="
                    width: 166.35pt;
                    border-collapse: collapse;
                    border: none;
                  "
                >
                  <tr style="height: 4.3pt">
                    <td
                      width="222"
                      valign="top"
                      style="
                        width: 166.35pt;
                        border: solid windowtext 1pt;
                        padding: 0cm 5.4pt 0cm 5.4pt;
                        height: 4.3pt;
                      "
                    >
                      <p
                        class="MsoNormal"
                        align="center"
                        style="
                          margin-bottom: 0cm;
                          text-align: center;
                          line-height: normal;
                        "
                      >
                        <span lang="EN-US">Form. {{ data.form }}</span>
                      </p>
                    </td>
                  </tr>
                  <tr style="height: 5.35pt">
                    <td
                      width="222"
                      valign="top"
                      style="
                        width: 166.35pt;
                        border: solid windowtext 1pt;
                        border-top: none;
                        padding: 0cm 5.4pt 0cm 5.4pt;
                        height: 5.35pt;
                      "
                    >
                      <p
                        class="MsoNormal"
                        align="center"
                        style="
                          margin-bottom: 0cm;
                          text-align: center;
                          line-height: normal;
                        "
                      >
                        <span lang="EN-US"
                          >Rev.
                          {{ $moment(data.rev).format("DD, MMMM YYYY") }}</span
                        >
                      </p>
                    </td>
                  </tr>
                </table>
                <p
                  class="MsoNormal"
                  style="margin-bottom: 0cm; line-height: normal"
                ></p>
              </td>
            </tr>
          </table>

          <p class="MsoNormal">
            <span lang="EN-US" style="font-size: 7pt; line-height: 107%"
              >&nbsp;</span
            >
          </p>

          <table
            class="MsoTableGrid"
            border="0"
            cellspacing="0"
            cellpadding="0"
            style="border-collapse: collapse; border: none"
          >
            <tr style="height: 10.6pt">
              <td
                width="642"
                style="
                  width: 481.7pt;
                  padding: 0cm 5.4pt 0cm 5.4pt;
                  height: 10.6pt;
                "
              >
                <table
                  class="MsoTableGrid"
                  border="1"
                  cellspacing="0"
                  cellpadding="0"
                  width="576"
                  style="
                    width: 432.15pt;
                    border-collapse: collapse;
                    border: none;
                  "
                >
                  <tr style="height: 12.4pt">
                    <td
                      width="48"
                      valign="top"
                      style="
                        width: 35.85pt;
                        border: solid windowtext 1pt;
                        padding: 0cm 5.4pt 0cm 5.4pt;
                        height: 12.4pt;
                      "
                    >
                      <p
                        class="MsoNormal"
                        style="margin-bottom: 0cm; line-height: normal"
                      >
                        <span lang="EN-US" style="font-size: 9pt">&nbsp;</span>
                      </p>
                    </td>
                    <td
                      width="85"
                      valign="top"
                      style="
                        width: 63.7pt;
                        border: none;
                        padding: 0cm 5.4pt 0cm 5.4pt;
                        height: 12.4pt;
                      "
                    >
                      <p
                        class="MsoNormal"
                        style="margin-bottom: 0cm; line-height: normal"
                      >
                        <span lang="EN-US" style="font-size: 9pt"
                          >Business Unit</span
                        >
                      </p>
                    </td>
                    <td
                      width="15"
                      valign="top"
                      style="
                        width: 11.55pt;
                        border: none;
                        padding: 0cm 5.4pt 0cm 5.4pt;
                        height: 12.4pt;
                      "
                    >
                      <p
                        class="MsoNormal"
                        style="margin-bottom: 0cm; line-height: normal"
                      >
                        <span lang="EN-US" style="font-size: 9pt">:</span>
                      </p>
                    </td>
                    <td
                      width="428"
                      valign="top"
                      style="
                        width: 321.05pt;
                        border: none;
                        padding: 0cm 5.4pt 0cm 5.4pt;
                        height: 12.4pt;
                      "
                    >
                      <p
                        class="MsoNormal"
                        style="margin-bottom: 0cm; line-height: normal"
                      >
                        <span lang="EN-US" style="font-size: 9pt">{{
                          data.businessUnit
                        }}</span>
                      </p>
                    </td>
                  </tr>
                  <tr style="height: 12.4pt">
                    <td
                      width="48"
                      valign="top"
                      style="
                        width: 35.85pt;
                        border: solid windowtext 1pt;
                        border-top: none;
                        padding: 0cm 5.4pt 0cm 5.4pt;
                        height: 12.4pt;
                      "
                    >
                      <p
                        class="MsoNormal"
                        style="margin-bottom: 0cm; line-height: normal"
                      >
                        <span lang="EN-US" style="font-size: 9pt">&nbsp;</span>
                      </p>
                    </td>
                    <td
                      width="85"
                      valign="top"
                      style="
                        width: 63.7pt;
                        border: none;
                        padding: 0cm 5.4pt 0cm 5.4pt;
                        height: 12.4pt;
                      "
                    >
                      <p
                        class="MsoNormal"
                        style="margin-bottom: 0cm; line-height: normal"
                      >
                        <span lang="EN-US" style="font-size: 9pt">Proyek</span>
                      </p>
                    </td>
                    <td
                      width="15"
                      valign="top"
                      style="
                        width: 11.55pt;
                        border: none;
                        padding: 0cm 5.4pt 0cm 5.4pt;
                        height: 12.4pt;
                      "
                    >
                      <p
                        class="MsoNormal"
                        style="margin-bottom: 0cm; line-height: normal"
                      >
                        <span lang="EN-US" style="font-size: 9pt">:</span>
                      </p>
                    </td>
                    <td
                      width="428"
                      valign="top"
                      style="
                        width: 321.05pt;
                        border: none;
                        padding: 0cm 5.4pt 0cm 5.4pt;
                        height: 12.4pt;
                      "
                    >
                      <p
                        class="MsoNormal"
                        style="margin-bottom: 0cm; line-height: normal"
                      >
                        <span lang="EN-US" style="font-size: 9pt">{{
                          data.proyek
                        }}</span>
                      </p>
                    </td>
                  </tr>
                </table>
                <p
                  class="MsoNormal"
                  style="margin-bottom: 0cm; line-height: normal"
                ></p>
              </td>
              <td
                width="384"
                style="
                  width: 287.8pt;
                  padding: 0cm 5.4pt 0cm 5.4pt;
                  height: 10.6pt;
                "
              >
                <table
                  class="MsoTableGrid"
                  border="0"
                  cellspacing="0"
                  cellpadding="0"
                  width="341"
                  style="
                    width: 255.7pt;
                    border-collapse: collapse;
                    border: none;
                  "
                >
                  <tr>
                    <td
                      width="87"
                      valign="top"
                      style="width: 65.35pt; padding: 0cm 5.4pt 0cm 5.4pt"
                    >
                      <p
                        class="MsoNormal"
                        style="margin-bottom: 0cm; line-height: normal"
                      >
                        <span lang="EN-US" style="font-size: 9pt"
                          >No. Formulir</span
                        >
                      </p>
                    </td>
                    <td
                      width="16"
                      valign="top"
                      style="width: 11.8pt; padding: 0cm 5.4pt 0cm 5.4pt"
                    >
                      <p
                        class="MsoNormal"
                        style="margin-bottom: 0cm; line-height: normal"
                      >
                        <span lang="EN-US" style="font-size: 9pt">:</span>
                      </p>
                    </td>
                    <td
                      width="238"
                      valign="top"
                      style="width: 178.55pt; padding: 0cm 5.4pt 0cm 5.4pt"
                    >
                      <p
                        class="MsoNormal"
                        style="margin-bottom: 0cm; line-height: normal"
                      >
                        <span lang="EN-US" style="font-size: 9pt">{{
                          detail.no
                        }}</span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      width="87"
                      valign="top"
                      style="width: 65.35pt; padding: 0cm 5.4pt 0cm 5.4pt"
                    >
                      <p
                        class="MsoNormal"
                        style="margin-bottom: 0cm; line-height: normal"
                      >
                        <span lang="EN-US" style="font-size: 9pt">Halaman</span>
                      </p>
                    </td>
                    <td
                      width="16"
                      valign="top"
                      style="width: 11.8pt; padding: 0cm 5.4pt 0cm 5.4pt"
                    >
                      <p
                        class="MsoNormal"
                        style="margin-bottom: 0cm; line-height: normal"
                      >
                        <span lang="EN-US" style="font-size: 9pt">:</span>
                      </p>
                    </td>
                    <td
                      width="238"
                      valign="top"
                      style="width: 178.55pt; padding: 0cm 5.4pt 0cm 5.4pt"
                    >
                      <p
                        class="MsoNormal"
                        style="margin-bottom: 0cm; line-height: normal"
                      >
                        <u
                          ><span lang="EN-US" style="font-size: 9pt"
                            >1 dari 1</span
                          ></u
                        >
                      </p>
                    </td>
                  </tr>
                </table>
                <p
                  class="MsoNormal"
                  style="margin-bottom: 0cm; line-height: normal"
                ></p>
              </td>
            </tr>
          </table>

          <p class="MsoNormal" style="margin-bottom: 13.6pt">
            <span lang="EN-US" style="font-size: 1pt; line-height: 107%"
              >&nbsp;</span
            >
          </p>

          <table
            class="TableGrid"
            border="0"
            cellspacing="0"
            cellpadding="0"
            width="1052"
            style="margin-left: -1.5pt; border-collapse: collapse"
          >
            <tr style="height: 12.75pt">
              <td
                width="1028"
                colspan="16"
                style="
                  width: 770.7pt;
                  border: solid black 1pt;
                  border-bottom: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 12.75pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-top: 0cm;
                    margin-right: 15.85pt;
                    margin-bottom: 0cm;
                    margin-left: 17pt;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <b
                    ><span lang="EN-US" style="font-family: 'Arial', sans-serif"
                      >MAMPU TELUSUR PROSES</span
                    ></b
                  >
                </p>
              </td>
            </tr>
            <tr style="height: 12.75pt">
              <td
                width="1028"
                colspan="16"
                style="
                  width: 770.7pt;
                  border: none;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 12.75pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-top: 0cm;
                    margin-right: 15.85pt;
                    margin-bottom: 0cm;
                    margin-left: 17pt;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <b
                    ><span lang="EN-US" style="font-family: 'Arial', sans-serif"
                      >&nbsp;</span
                    ></b
                  >
                </p>
              </td>
            </tr>
            <tr style="height: 12.75pt">
              <td
                width="91"
                rowspan="2"
                style="
                  width: 68.6pt;
                  border: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 12.75pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 7pt; font-family: 'Arial', sans-serif"
                    >Nomor</span
                  >
                </p>
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 7pt; font-family: 'Arial', sans-serif"
                    >Formulir</span
                  >
                </p>
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 7pt; font-family: 'Arial', sans-serif"
                    >PW-QTY-07-02-01</span
                  >
                </p>
              </td>
              <td
                width="90"
                rowspan="2"
                style="
                  width: 67.4pt;
                  border: solid windowtext 1pt;
                  border-left: none;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 12.75pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 7pt; font-family: 'Arial', sans-serif"
                    >Nomor</span
                  >
                </p>
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 7pt; font-family: 'Arial', sans-serif"
                    >Formulir</span
                  >
                </p>
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 7pt; font-family: 'Arial', sans-serif"
                    >PW-QTY-01-02-02</span
                  >
                </p>
              </td>
              <td
                width="60"
                rowspan="2"
                style="
                  width: 44.95pt;
                  border: solid windowtext 1pt;
                  border-left: none;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 12.75pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 7pt; font-family: 'Arial', sans-serif"
                    >Tanggal</span
                  >
                </p>
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 7pt; font-family: 'Arial', sans-serif"
                    >Pengecoran</span
                  >
                </p>
              </td>
              <td
                width="78"
                rowspan="2"
                style="
                  width: 58.75pt;
                  border: solid windowtext 1pt;
                  border-left: none;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 12.75pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 7pt; font-family: 'Arial', sans-serif"
                    >Detail</span
                  >
                </p>
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 7pt; font-family: 'Arial', sans-serif"
                    >Lokasi</span
                  >
                </p>
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 7pt; font-family: 'Arial', sans-serif"
                    >Pengecoran</span
                  >
                </p>
              </td>
              <td
                width="78"
                rowspan="2"
                style="
                  width: 58.5pt;
                  border: solid windowtext 1pt;
                  border-left: none;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 12.75pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 7pt; font-family: 'Arial', sans-serif"
                    >Detail No./Kode</span
                  >
                </p>
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 7pt; font-family: 'Arial', sans-serif"
                    >Gambar Lokasi</span
                  >
                </p>
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 7pt; font-family: 'Arial', sans-serif"
                    >Pengecoran</span
                  >
                </p>
              </td>
              <td
                width="114"
                colspan="2"
                style="
                  width: 85.5pt;
                  border: solid windowtext 1pt;
                  border-left: none;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 12.75pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 7pt; font-family: 'Arial', sans-serif"
                    >Personil</span
                  >
                </p>
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 7pt; font-family: 'Arial', sans-serif"
                    >Pelaksana</span
                  >
                </p>
              </td>
              <td
                width="102"
                colspan="2"
                style="
                  width: 76.5pt;
                  border: solid windowtext 1pt;
                  border-left: none;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 12.75pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 7pt; font-family: 'Arial', sans-serif"
                    >Jam Pengecoran</span
                  >
                </p>
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 7pt; font-family: 'Arial', sans-serif"
                    >/ Bongkar</span
                  >
                </p>
              </td>
              <td
                width="66"
                rowspan="2"
                style="
                  width: 49.5pt;
                  border: solid windowtext 1pt;
                  border-left: none;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 12.75pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 7pt; font-family: 'Arial', sans-serif"
                    >Jumlah</span
                  >
                </p>
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 7pt; font-family: 'Arial', sans-serif"
                    >Pekerja</span
                  >
                </p>
              </td>
              <td
                width="54"
                rowspan="2"
                style="
                  width: 40.5pt;
                  border: solid windowtext 1pt;
                  border-left: none;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 12.75pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 7pt; font-family: 'Arial', sans-serif"
                    >Cuaca</span
                  >
                </p>
              </td>
              <td
                width="102"
                colspan="2"
                style="
                  width: 76.5pt;
                  border: solid windowtext 1pt;
                  border-left: none;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 12.75pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 7pt; font-family: 'Arial', sans-serif"
                    >Penggetar</span
                  >
                </p>
              </td>
              <td
                width="78"
                rowspan="2"
                style="
                  width: 58.5pt;
                  border: solid windowtext 1pt;
                  border-left: none;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 12.75pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 7pt; font-family: 'Arial', sans-serif"
                    >Finishing</span
                  >
                </p>
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 7pt; font-family: 'Arial', sans-serif"
                    >*)</span
                  >
                </p>
              </td>
              <td
                width="114"
                colspan="2"
                style="
                  width: 85.5pt;
                  border: solid windowtext 1pt;
                  border-left: none;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 12.75pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 7pt; font-family: 'Arial', sans-serif"
                    >Curing</span
                  >
                </p>
              </td>
            </tr>
            <tr style="height: 12.75pt">
              <td
                width="54"
                style="
                  width: 40.5pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 12.75pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 7pt; font-family: 'Arial', sans-serif"
                    >Nama</span
                  >
                </p>
              </td>
              <td
                width="60"
                style="
                  width: 45pt;
                  border: solid windowtext 1pt;
                  border-left: none;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 12.75pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 7pt; font-family: 'Arial', sans-serif"
                    >T. Tangan</span
                  >
                </p>
              </td>
              <td
                width="48"
                style="
                  width: 36pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 12.75pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 7pt; font-family: 'Arial', sans-serif"
                    >Mulai</span
                  >
                </p>
              </td>
              <td
                width="54"
                style="
                  width: 40.5pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 12.75pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 7pt; font-family: 'Arial', sans-serif"
                    >Selesai</span
                  >
                </p>
              </td>
              <td
                width="48"
                style="
                  width: 36pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 12.75pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 7pt; font-family: 'Arial', sans-serif"
                    >Tipe</span
                  >
                </p>
              </td>
              <td
                width="54"
                style="
                  width: 40.5pt;
                  border: solid windowtext 1pt;
                  border-left: none;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 12.75pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 7pt; font-family: 'Arial', sans-serif"
                    >Jumlah</span
                  >
                </p>
              </td>
              <td
                width="60"
                style="
                  width: 45pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 12.75pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 7pt; font-family: 'Arial', sans-serif"
                    >Sistem **)</span
                  >
                </p>
              </td>
              <td
                width="54"
                style="
                  width: 40.5pt;
                  border: solid windowtext 1pt;
                  border-left: none;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 12.75pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 7pt; font-family: 'Arial', sans-serif"
                    >Lama ***)</span
                  >
                </p>
              </td>
            </tr>
            <tr style="height: 12.75pt">
              <td
                width="91"
                style="
                  width: 68.6pt;
                  border: solid windowtext 1pt;
                  border-top: none;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 12.75pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <b
                    ><span
                      lang="EN-US"
                      style="font-size: 7pt; font-family: 'Arial', sans-serif"
                      >1</span
                    ></b
                  >
                </p>
              </td>
              <td
                width="90"
                style="
                  width: 67.4pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 12.75pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <b
                    ><span
                      lang="EN-US"
                      style="font-size: 7pt; font-family: 'Arial', sans-serif"
                      >2</span
                    ></b
                  >
                </p>
              </td>
              <td
                width="60"
                style="
                  width: 44.95pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 12.75pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <b
                    ><span
                      lang="EN-US"
                      style="font-size: 7pt; font-family: 'Arial', sans-serif"
                      >3</span
                    ></b
                  >
                </p>
              </td>
              <td
                width="78"
                style="
                  width: 58.75pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 12.75pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <b
                    ><span
                      lang="EN-US"
                      style="font-size: 7pt; font-family: 'Arial', sans-serif"
                      >4</span
                    ></b
                  >
                </p>
              </td>
              <td
                width="78"
                style="
                  width: 58.5pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 12.75pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <b
                    ><span
                      lang="EN-US"
                      style="font-size: 7pt; font-family: 'Arial', sans-serif"
                      >5</span
                    ></b
                  >
                </p>
              </td>
              <td
                width="54"
                style="
                  width: 40.5pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 12.75pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <b
                    ><span
                      lang="EN-US"
                      style="font-size: 7pt; font-family: 'Arial', sans-serif"
                      >6</span
                    ></b
                  >
                </p>
              </td>
              <td
                width="60"
                style="
                  width: 45pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 12.75pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <b
                    ><span
                      lang="EN-US"
                      style="font-size: 7pt; font-family: 'Arial', sans-serif"
                      >7</span
                    ></b
                  >
                </p>
              </td>
              <td
                width="48"
                style="
                  width: 36pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 12.75pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <b
                    ><span
                      lang="EN-US"
                      style="font-size: 7pt; font-family: 'Arial', sans-serif"
                      >8</span
                    ></b
                  >
                </p>
              </td>
              <td
                width="54"
                style="
                  width: 40.5pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 12.75pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <b
                    ><span
                      lang="EN-US"
                      style="font-size: 7pt; font-family: 'Arial', sans-serif"
                      >9</span
                    ></b
                  >
                </p>
              </td>
              <td
                width="66"
                style="
                  width: 49.5pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 12.75pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <b
                    ><span
                      lang="EN-US"
                      style="font-size: 7pt; font-family: 'Arial', sans-serif"
                      >10</span
                    ></b
                  >
                </p>
              </td>
              <td
                width="54"
                style="
                  width: 40.5pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 12.75pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <b
                    ><span
                      lang="EN-US"
                      style="font-size: 7pt; font-family: 'Arial', sans-serif"
                      >11</span
                    ></b
                  >
                </p>
              </td>
              <td
                width="48"
                style="
                  width: 36pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 12.75pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <b
                    ><span
                      lang="EN-US"
                      style="font-size: 7pt; font-family: 'Arial', sans-serif"
                      >12</span
                    ></b
                  >
                </p>
              </td>
              <td
                width="54"
                style="
                  width: 40.5pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 12.75pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <b
                    ><span
                      lang="EN-US"
                      style="font-size: 7pt; font-family: 'Arial', sans-serif"
                      >13</span
                    ></b
                  >
                </p>
              </td>
              <td
                width="78"
                style="
                  width: 58.5pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 12.75pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <b
                    ><span
                      lang="EN-US"
                      style="font-size: 7pt; font-family: 'Arial', sans-serif"
                      >14</span
                    ></b
                  >
                </p>
              </td>
              <td
                width="60"
                style="
                  width: 45pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 12.75pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <b
                    ><span
                      lang="EN-US"
                      style="font-size: 7pt; font-family: 'Arial', sans-serif"
                      >15</span
                    ></b
                  >
                </p>
              </td>
              <td
                width="54"
                style="
                  width: 40.5pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 12.75pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <b
                    ><span
                      lang="EN-US"
                      style="font-size: 7pt; font-family: 'Arial', sans-serif"
                      >16</span
                    ></b
                  >
                </p>
              </td>
            </tr>
            <!-- header main content -->
            <tr style="height: 1pt">
              <td
                width="91"
                rowspan="999999999"
                style="
                  width: 68.6pt;
                  border: solid windowtext 1pt;
                  border-top: none;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 1pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >{{ tbm.no }}</span
                  >
                </p>
              </td>
              <td
                width="90"
                rowspan="999999999"
                style="
                  width: 67.4pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 1pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >{{ tbu.no }}</span
                  >
                </p>
              </td>
              <td
                width="60"
                style="
                  width: 44.95pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 1pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="78"
                rowspan="999999999"
                style="
                  width: 58.75pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 1pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >{{ tbm.lokasiPengecoran }}</span
                  >
                </p>
              </td>
              <td
                width="78"
                rowspan="999999999"
                style="
                  width: 58.5pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 1pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >{{ detail.noDetail }}</span
                  >
                </p>
              </td>
              <td
                width="54"
                style="
                  width: 40.5pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 1pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="60"
                style="
                  width: 45pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 1pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="48"
                style="
                  width: 36pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 1pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="54"
                style="
                  width: 40.5pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 1pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="66"
                style="
                  width: 49.5pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 1pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="54"
                style="
                  width: 40.5pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 1pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="48"
                style="
                  width: 36pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 1pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="54"
                style="
                  width: 40.5pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 1pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="78"
                style="
                  width: 58.5pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 1pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="60"
                style="
                  width: 45pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 1pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="54"
                style="
                  width: 40.5pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 1pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >&nbsp;</span
                  >
                </p>
              </td>
            </tr>
            <!-- main content -->
            <tr v-for="item in items" :key="item._id" style="height: 1pt">
              <td
                width="60"
                style="
                  width: 44.95pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 1pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >{{ item.tanggalPengecoran }}</span
                  >
                </p>
              </td>
              <td
                width="54"
                style="
                  width: 40.5pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 1pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >{{ item.personilNama }}</span
                  >
                </p>
              </td>
              <td
                width="60"
                valign="top"
                style="
                  width: 45pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 1pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span lang="EN-US"
                    ><img
                      v-if="item.personilTtd"
                      id="Picture 1788"
                      width="45"
                      :src="item.personilTtd"
                  /></span>
                </p>
              </td>
              <td
                width="48"
                style="
                  width: 36pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 1pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >{{ item.jamMulai }}</span
                  >
                </p>
              </td>
              <td
                width="54"
                style="
                  width: 40.5pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 1pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >{{ item.jamSelesai }}</span
                  >
                </p>
              </td>
              <td
                width="66"
                style="
                  width: 49.5pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 1pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >{{ item.jumlahPekerja }}</span
                  >
                </p>
              </td>
              <td
                width="54"
                style="
                  width: 40.5pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 1pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >{{ item.cuaca }}</span
                  >
                </p>
              </td>
              <td
                width="48"
                style="
                  width: 36pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 1pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >{{ item.penggetarTipe }}</span
                  >
                </p>
              </td>
              <td
                width="54"
                style="
                  width: 40.5pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 1pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >{{ item.penggetarJumlah }}</span
                  >
                </p>
              </td>
              <td
                width="78"
                style="
                  width: 58.5pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 1pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >{{ item.finishing }}</span
                  >
                </p>
              </td>
              <td
                width="60"
                style="
                  width: 45pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 1pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >{{ item.curingSistem }}</span
                  >
                </p>
              </td>
              <td
                width="54"
                style="
                  width: 40.5pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 1pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >{{ item.curingLama }}</span
                  >
                </p>
              </td>
            </tr>
            <!-- footer of main content -->
            <tr style="height: 1pt">
              <td
                width="60"
                style="
                  width: 44.95pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 1pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="54"
                style="
                  width: 40.5pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 1pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="60"
                style="
                  width: 45pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 1pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="60"
                style="
                  width: 45pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 1pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="48"
                style="
                  width: 36pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 1pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="54"
                style="
                  width: 40.5pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 1pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="54"
                style="
                  width: 40.5pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 1pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="48"
                style="
                  width: 36pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 1pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="54"
                style="
                  width: 40.5pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 1pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="78"
                style="
                  width: 58.5pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 1pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="60"
                style="
                  width: 45pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 1pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="54"
                style="
                  width: 40.5pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 1pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >&nbsp;</span
                  >
                </p>
              </td>
            </tr>
          </table>

          <table style="margin-top: 10px; margin-bottom: 10px">
            <tr>
              <p
                class="MsoNormal"
                style="
                  margin-top: 0cm;
                  margin-right: 43.85pt;
                  margin-bottom: 0.15pt;
                  margin-left: 0cm;
                  line-height: 150%;
                "
              >
                <span
                  lang="EN-US"
                  style="
                    font-size: 7pt;
                    line-height: 150%;
                    font-family: 'Arial', sans-serif;
                  "
                >
                  Keterangan</span
                >
              </p>

              <p
                class="MsoNormal"
                style="
                  margin-top: 0cm;
                  margin-right: 43.85pt;
                  margin-bottom: 0.15pt;
                  margin-left: 0cm;
                  line-height: 150%;
                "
              >
                <span
                  lang="EN-US"
                  style="
                    font-size: 7pt;
                    line-height: 150%;
                    font-family: 'Arial', sans-serif;
                  "
                  >*) Finishing kasar (untuk beton) : adalah pengecoran lantai
                  tanpa hardener</span
                >
              </p>
            </tr>
          </table>

          <table
            class="MsoTableGrid"
            border="0"
            cellspacing="0"
            cellpadding="0"
            align="left"
            width="1047"
            style="
              width: 784.95pt;
              border-collapse: collapse;
              border: none;
              margin-left: 6.75pt;
              margin-right: 6.75pt;
            "
          >
            <tr style="height: 13.5pt">
              <td
                width="160"
                style="
                  width: 120.25pt;
                  padding: 0cm 5.4pt 0cm 5.4pt;
                  height: 13.5pt;
                "
              ></td>
              <td
                width="690"
                valign="top"
                style="
                  width: 517.4pt;
                  padding: 0cm 5.4pt 0cm 5.4pt;
                  height: 13.5pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 7pt; font-family: 'Arial', sans-serif"
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="196"
                style="
                  width: 147.3pt;
                  padding: 0cm 5.4pt 0cm 5.4pt;
                  height: 13.5pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 7pt; font-family: 'Arial', sans-serif"
                    >{{ dibuatOleh.lokasi }},
                    {{ $moment(dibuatOleh.tanggal).format("DD MMMM YYYY")
                    }}<br />
                    Dibuat oleh,</span
                  >
                </p>
              </td>
            </tr>
            <tr style="height: 2.05pt">
              <td
                width="160"
                style="
                  width: 120.25pt;
                  padding: 0cm 5.4pt 0cm 5.4pt;
                  height: 2.05pt;
                "
              ></td>
              <td
                width="690"
                valign="top"
                style="
                  width: 517.4pt;
                  padding: 0cm 5.4pt 0cm 5.4pt;
                  height: 2.05pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-top: 0cm;
                    margin-right: 43.85pt;
                    margin-bottom: 0.15pt;
                    margin-left: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span lang="EN-US">&nbsp;</span>
                </p>
              </td>
              <td
                width="196"
                style="
                  width: 147.3pt;
                  padding: 0cm 5.4pt 0cm 5.4pt;
                  height: 2.05pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin: 0;
                    text-align: center;
                    line-height: normal;
                    min-height: 62px;
                  "
                >
                  <img
                    v-if="dibuatOleh.ttd"
                    width="72"
                    height="62"
                    :src="dibuatOleh.ttd"
                    align="center"
                    hspace="12"
                  />
                </p>
              </td>
            </tr>
            <tr style="height: 13.5pt">
              <td
                width="160"
                style="
                  width: 120.25pt;
                  padding: 0cm 5.4pt 0cm 5.4pt;
                  height: 13.5pt;
                "
              ></td>
              <td
                width="690"
                valign="top"
                style="
                  width: 517.4pt;
                  padding: 0cm 5.4pt 0cm 5.4pt;
                  height: 13.5pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 7pt; font-family: 'Arial', sans-serif"
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="196"
                style="
                  width: 147.3pt;
                  padding: 0cm 5.4pt 0cm 5.4pt;
                  height: 13.5pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 7pt; font-family: 'Arial', sans-serif"
                    >{{ dibuatOleh.jabatan }}<br />
                    ( {{ dibuatOleh.nama }} )</span
                  >
                </p>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  layout: "dashboard",
  props: {
    idTelusur: String,
  },
  data() {
    return {
      baseUrl: "",
      data: {},
      detail: {},
      tbm: {},
      tbu: {},
      items: [],
      dibuatOleh: {},
      loadingFetch: false,
    };
  },
  computed: {
    icon() {
      return require("./logo.json")?.image;
    },
  },
  async mounted() {
    await this.fetchData();
  },
  methods: {
    async fetchData() {
      // handle baseUrl
      this.baseUrl = window.location.origin;
      // handle data telusur
      const id = this.$route.query.id || this.idTelusur;
      if (id) {
        this.loadingFetch = true;
        try {
          const result = await this.$axios
            .get("/api/Telusur/get", {
              params: {
                jsonQuery: JSON.stringify({
                  _id: id,
                  pipeline: [
                    {
                      $lookup: {
                        from: "TelusurProses",
                        localField: "idTp",
                        foreignField: "_id",
                        as: "tp",
                      },
                    },
                    {
                      $lookup: {
                        from: "TelusurBahanMasuk",
                        localField: "idTbm",
                        foreignField: "_id",
                        as: "tbm",
                      },
                    },
                    {
                      $lookup: {
                        from: "TelusurBendaUji",
                        localField: "idTbu",
                        foreignField: "_id",
                        as: "tbu",
                      },
                    },
                  ],
                }),
              },
            })
            .then((res) => res?.data?.result);
          if (result.length >= 1) {
            const telusur = result[0];
            const tp = telusur?.tp?.[0] || {};
            const tbm = telusur?.tbm?.[0] || {};
            const tbu = telusur?.tbu?.[0] || {};
            this.data = telusur;
            this.detail = tp;
            this.tbm = tbm;
            this.tbu = tbu;
            this.dibuatOleh = tp?.dibuatOleh || {};
            this.items = tp?.items?.map((item, idx) => {
              return {
                ...item,
                tanggalPengecoran:
                  tp?.tanggalPengecoran && idx === 0
                    ? this.$moment(tp.tanggalPengecoran).format("DD-MMM-YY")
                    : null,
                noDetail: tp?.noDetail,
                personilNama: tp?.personil?.[idx]?.nama,
                personilTtd: tp?.personil?.[idx]?.ttd,
              };
            });
          }
        } catch (err) {
          this.$swal(err?.response?.data || err?.message, "", "error");
        }
        this.loadingFetch = false;
      }
    },
    async print() {
      await this.fetchData();
      const content = document.getElementById("printPaper").cloneNode(true);
      const w = window.open("", "", "width=1123,height=794");
      w.document.head.innerHTML =
        document.getElementsByTagName("head")[0].innerHTML;
      w.document.body.append(content);
      w.print();
    },
  },
};
</script>
<style scoped>
/* Font Definitions */
@font-face {
  font-family: "Cambria Math";
  panose-1: 2 4 5 3 5 4 6 3 2 4;
}
@font-face {
  font-family: Calibri;
  panose-1: 2 15 5 2 2 2 4 3 2 4;
}
/* Style Definitions */
p.MsoNormal,
li.MsoNormal,
div.MsoNormal {
  margin-top: 0cm;
  margin-right: 0cm;
  margin-bottom: 8pt;
  margin-left: 0cm;
  line-height: 107%;
  font-size: 11pt;
  font-family: "Calibri", sans-serif;
  color: black;
}
.MsoChpDefault {
  font-family: "Calibri", sans-serif;
}
.MsoPapDefault {
  margin-bottom: 8pt;
  line-height: 107%;
}
@page WordSection1 {
  size: 841.8pt 595.2pt;
  margin: 36pt 36pt 36pt 36pt;
}
div.WordSection1 {
  page: WordSection1;
}
</style>
