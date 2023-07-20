import {computed, reactive, ref} from "vue";
export const theme = reactive({
    isDark: true,

    switch() {
        this.isDark = !this.isDark;
    },

    bgPrimary() {
        return this.isDark ? 'bgPrimaryDark' : 'bgPrimaryLight';
    },
    bgSecondary() {
        return this.isDark ? 'bgSecondaryDark' : 'bgSecondaryLight';
    },
    textColor() {
        return this.isDark ? 'textColorDark' : 'textColorLight';
    },

});