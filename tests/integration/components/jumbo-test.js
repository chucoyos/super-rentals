import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | jumbo', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the content inside a jumbo header with a tomster', async function (assert) {
    await render(hbs`<Jumbo>Hello World</Jumbo>`);
    assert.dom(this.element).hasText('Hello World');
    await render(hbs`<Jumbo />`);
    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <Jumbo>
        template block text
      </Jumbo>
    `);

    assert.dom(this.element).hasText('template block text');
    assert.dom('.jumbo').exists();
    assert.dom('.jumbo .tomster').exists();
  });
});
