<template>
  <v-card>
    <v-card-title class="headline"> Telusur </v-card-title>
    <v-card-text>
      <v-form>
          <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                    label="Business Unit"
                    outlined
                    dense
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                    label="Proyek"
                    outlined
                    dense
                />
              </v-col>
          </v-row>
          <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                    label="Form"
                    placeholder="Contoh: PW-QTY-07-02-01"
                    outlined
                    dense
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                    label="Rev"
                    placeholder="PW-QTY-07-02-01"
                    outlined
                    dense
                />
              </v-col>
          </v-row>
      </v-form>
    </v-card-text>
    <v-card-actions justify="center">
      <v-spacer />
      <v-btn color="primary" nuxt to="/"> Submit </v-btn>
      <v-spacer />
    </v-card-actions>
  </v-card>
</template>
