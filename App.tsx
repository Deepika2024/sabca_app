import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Platform,
  ScrollView,
  Switch,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, Inter_300Light, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import { Poppins_600SemiBold, Poppins_700Bold, Poppins_800ExtraBold } from '@expo-google-fonts/poppins';
import { MaterialCommunityIcons, Feather, AntDesign, FontAwesome } from '@expo/vector-icons';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
  });

  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  if (!fontsLoaded) {
    return (
      <View style={styles.root}>
        <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#000',
          }}
        >
          <Text style={{ color: '#fff', fontSize: 16 }}>Loading...</Text>
        </View>
      </View>
    );
  }

  const handleLogin = () => {
    // TODO: integrate your login logic here
    console.log({ emailOrPhone, password, rememberMe });
  };

  return (
    <LinearGradient
      colors={['#ef4444', '#a855f7', '#3b82f6']} // from-red-500 via-purple-500 to-blue-500
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.root}
    >
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.card}>
          {/* Logo + Title */}
          <View style={styles.header}>
            <View style={styles.logoBox}>
              <MaterialCommunityIcons name="office-building" size={40} color="#ffffff" />
            </View>
            <Text style={styles.title}>SABCA</Text>
            <Text style={styles.subtitle}>Welcome back! Please login</Text>
          </View>

          {/* Form */}
          <View style={styles.form}>
            {/* Email / Phone */}
            <View style={styles.fieldGroup}>
              <Text style={styles.label}>Email or Phone</Text>
              <View style={styles.inputWrapper}>
                <View style={styles.iconLeft}>
                  <Feather name="user" size={20} color="#9ca3af" />
                </View>
                <TextInput
                  style={styles.input}
                  placeholder="Enter email or phone"
                  placeholderTextColor="#9ca3af"
                  value={emailOrPhone}
                  onChangeText={setEmailOrPhone}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
            </View>

            {/* Password */}
            <View style={styles.fieldGroup}>
              <Text style={styles.label}>Password</Text>
              <View style={styles.inputWrapper}>
                <View style={styles.iconLeft}>
                  <Feather name="lock" size={20} color="#9ca3af" />
                </View>
                <TextInput
                  style={styles.input}
                  placeholder="Enter password"
                  placeholderTextColor="#9ca3af"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity
                  style={styles.iconRight}
                  onPress={() => setShowPassword((prev) => !prev)}
                  activeOpacity={0.7}
                >
                  <Feather
                    name={showPassword ? 'eye' : 'eye-off'}
                    size={20}
                    color="#9ca3af"
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Remember + Forgot */}
            <View style={styles.rowBetween}>
              <TouchableOpacity
                style={styles.rememberContainer}
                activeOpacity={0.8}
                onPress={() => setRememberMe((prev) => !prev)}
              >
                <Switch
                  value={rememberMe}
                  onValueChange={setRememberMe}
                  trackColor={{ false: '#e5e7eb', true: '#c4b5fd' }}
                  thumbColor={rememberMe ? '#7c3aed' : '#ffffff'}
                />
                <Text style={styles.rememberText}>Remember me</Text>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.7}>
                <LinearGradient
                  colors={['#dc2626', '#2563eb']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.gradientTextWrapper}
                >
                  <Text style={styles.gradientText}>Forgot Password?</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>

            {/* Login Button */}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={handleLogin}
              style={styles.loginButtonContainer}
            >
              <LinearGradient
                colors={['#dc2626', '#2563eb']} // from-red-600 to-blue-600
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.loginButton}
              >
                <Text style={styles.loginButtonText}>Login</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          {/* Divider */}
          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>Or continue with</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Social Login */}
          <View style={styles.socialRow}>
            <TouchableOpacity
              style={styles.socialButton}
              activeOpacity={0.8}
            >
              <AntDesign name="google" size={20} color="#ef4444" />
              <Text style={styles.socialText}>Google</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.socialButton}
              activeOpacity={0.8}
            >
              <FontAwesome name="facebook-official" size={20} color="#2563eb" />
              <Text style={styles.socialText}>Facebook</Text>
            </TouchableOpacity>
          </View>

          {/* Register */}
          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>
              Don&apos;t have an account?{' '}
            </Text>
            <TouchableOpacity activeOpacity={0.7}>
              <LinearGradient
                colors={['#dc2626', '#2563eb']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.gradientTextWrapper}
              >
                <Text style={styles.registerCTA}>Register Now</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingVertical: 32,
    justifyContent: 'center',
  },
  card: {
    width: '100%',
    maxWidth: 420,
    alignSelf: 'center',
    backgroundColor: 'rgba(255,255,255,0.96)',
    borderRadius: 24,
    padding: 24,
    ...(Platform.OS === 'ios'
      ? {
          shadowColor: '#000',
          shadowOpacity: 0.15,
          shadowOffset: { width: 0, height: 10 },
          shadowRadius: 24,
        }
      : {
          elevation: 10,
        }),
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  logoBox: {
    width: 80,
    height: 80,
    borderRadius: 24,
    backgroundColor: '#dc2626',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: 12,
    fontSize: 28,
    fontFamily: 'Poppins_700Bold',
    textAlign: 'center',
    backgroundColor: 'transparent',
    color: '#111827',
  },
  subtitle: {
    marginTop: 4,
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: '#4b5563',
    textAlign: 'center',
  },
  form: {
    marginTop: 8,
  },
  fieldGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 13,
    marginBottom: 6,
    fontFamily: 'Inter_500Medium',
    color: '#374151',
  },
  inputWrapper: {
    position: 'relative',
    borderWidth: 2,
    borderColor: '#e5e7eb',
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    backgroundColor: '#ffffff',
  },
  iconLeft: {
    width: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconRight: {
    width: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 4,
    fontSize: 13,
    fontFamily: 'Inter_400Regular',
    color: '#111827',
  },
  rowBetween: {
    marginTop: 4,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberText: {
    marginLeft: 8,
    fontSize: 13,
    fontFamily: 'Inter_400Regular',
    color: '#4b5563',
  },
  gradientTextWrapper: {
    borderRadius: 999,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  gradientText: {
    fontSize: 13,
    fontFamily: 'Inter_500Medium',
    color: '#ffffff',
    // This is visually similar to gradient text by overlaying
    // but React Native can't clip text like CSS, this is a close match
  },
  loginButtonContainer: {
    marginTop: 8,
  },
  loginButton: {
    borderRadius: 14,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 15,
    fontFamily: 'Inter_600SemiBold',
  },
  dividerContainer: {
    marginVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#e5e7eb',
  },
  dividerText: {
    marginHorizontal: 8,
    fontSize: 12,
    fontFamily: 'Inter_400Regular',
    color: '#6b7280',
  },
  socialRow: {
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'space-between',
  },
  socialButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: '#e5e7eb',
    borderRadius: 14,
    backgroundColor: '#ffffff',
  },
  socialText: {
    marginLeft: 8,
    fontSize: 13,
    fontFamily: 'Inter_500Medium',
    color: '#374151',
  },
  registerContainer: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerText: {
    fontSize: 13,
    fontFamily: 'Inter_400Regular',
    color: '#4b5563',
  },
  registerCTA: {
    fontSize: 13,
    fontFamily: 'Inter_600SemiBold',
    color: '#ffffff',
  },
});