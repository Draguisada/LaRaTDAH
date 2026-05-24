import 'package:flutter_test/flutter_test.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:para_lara/main.dart';

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();

  testWidgets('Tela inicial exibe botão Jogar', (WidgetTester tester) async {
    SharedPreferences.setMockInitialValues({});
    await tester.pumpWidget(const ParaLaraApp());
    await tester.pumpAndSettle();

    expect(find.text('Joguinho TDAH'), findsWidgets);
    expect(find.text('Jogar'), findsOneWidget);
  });
}
