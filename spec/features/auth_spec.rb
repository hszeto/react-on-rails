require 'rails_helper'

describe 'Auth', type: :feature, js: true do
  before do
    visit '/'
  end

  context 'When Not Login' do
    it 'visit Home' do
      expect(page).to have_content 'Home'
    end

    it 'visit Public' do
      click_link 'Public'

      expect(page).to have_content 'This is public page. No secret here.'
    end

    it 'visit Private' do
      click_link 'Private'

      expect(page).to have_content 'Login first'
    end

    it 'visit HelloWorld' do
      visit 'hello'

      expect(page).to have_content 'Login first'
    end
  end

  context 'When Login' do
    before do
      click_button 'Login'
    end

    it 'visit Home' do
      expect(page).to have_content 'Home'
    end

    it 'visit Public' do
      click_link 'Public'

      expect(page).to have_content 'This is public page. No secret here.'
    end

    it 'visit Private' do
      click_link 'Private'

      expect(page).to have_content 'You have logged in. The secret is in the greeting.'
    end

    it 'visit HelloWorld' do
      click_link 'Private'
      click_link 'Hello'

      expect(page).to have_content 'Greeting: YO YO YO!'
    end
  end

  context 'When Login then Logout' do
    before do
      click_button 'Login'
      sleep 1
      click_button 'Logout'
    end

    it 'visit Private' do
      click_link 'Private'

      expect(page).to have_content 'Login first'
    end
  end
end